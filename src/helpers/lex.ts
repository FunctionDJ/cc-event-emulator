// CREDIT:
// https://github.com/dmitmel/cc-translateinator/blob/88383ec7584708d9836cd8c2dc4f785a0311d83f/src/crosscode_markup.ts
// by dmitmel (on GitHub)

/* eslint-disable */

export const FONT_COLORS = new Map<string, string>([
  // ['0', '#ffffff'], // white (default)
  ['1', '#ff6969'], // red
  ['2', '#65ff89'], // green
  ['3', '#ffe430'], // yellow
  ['4', '#808080'], // gray
  ['5', '#ff8932'], // orange (only on the small font)
]);

/// Inspired by <https://github.com/L-Sherry/Localize-Me-Tools/blob/c117847bc15fe8b62a7bcd7f343310c9a4ce09da/checker.py#L130>.
export interface Token {
  type: 'LITERAL_TEXT' | 'TYPING_DELAY' | 'ESCAPE' | 'COLOR' | 'TYPING_SPEED' | 'VARIABLE' | 'ICON';
  start_index: number;
  end_index: number;
  data: string;
}

/// Inspired by <https://github.com/L-Sherry/Localize-Me-Tools/blob/c117847bc15fe8b62a7bcd7f343310c9a4ce09da/checker.py#L118-L165>.
export function* lex(text: string): Generator<Token> {
  let literal_text_start = 0;
  let last_i = 0;
  while (true) {
    let i = text.indexOf('\\', last_i);
    last_i = i + 1;
    if (i < 0) break;

    let command_char = text.charAt(i + 1);
    let token_type: Token['type'] | null = null;
    let token_data: string = command_char;
    let literal_text_restart = i + 2;

    switch (command_char) {
      case '.':
      case '!': {
        token_type = 'TYPING_DELAY';
        break;
      }
      case '\\': {
        token_type = 'ESCAPE';
        break;
      }

      case 'c':
      case 's':
      case 'v':
      case 'i': {
        let opening_bracket_index = i + 2;
        literal_text_restart = opening_bracket_index + 1;
        if (text.charAt(opening_bracket_index) === '[') {
          let closing_bracket_index = text.indexOf(']', opening_bracket_index + 1);
          if (closing_bracket_index > 0) {
            literal_text_restart = closing_bracket_index + 1;

            // prettier-ignore
            switch (command_char) {
              case 'c': { token_type = 'COLOR';        break; }
              case 's': { token_type = 'TYPING_SPEED'; break; }
              case 'v': { token_type = 'VARIABLE';     break; }
              case 'i': { token_type = 'ICON';         break; }
            }
            token_data = text.slice(opening_bracket_index + 1, closing_bracket_index);
          }
        }
        break;
      }
    }

    if (token_type != null) {
      let literal_text = text.slice(literal_text_start, i);
      if (literal_text.length > 0) {
        yield {
          type: 'LITERAL_TEXT',
          start_index: literal_text_start,
          end_index: i,
          data: literal_text,
        };
      }
      literal_text_start = literal_text_restart;

      yield {
        type: token_type,
        start_index: i,
        end_index: literal_text_restart,
        data: token_data,
      };
    }

    last_i = literal_text_restart;
  }

  let last_literal_text = text.slice(literal_text_start);
  if (last_literal_text.length > 0) {
    yield {
      type: 'LITERAL_TEXT',
      start_index: literal_text_start,
      end_index: text.length,
      data: last_literal_text,
    };
  }
}