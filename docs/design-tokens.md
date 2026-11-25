# Truckit foundations

Source: Figma working copy `0Ghyj0eNlOZOuM3YiIgMmU`, read 2026-11-25 via the connector. Frames: button `37:130`, customer dashboard `141:24`, request form `272:278`, service center `356:496`, move cards `189:411`, public page `232:43`.

| Foundation               | Source value                | Code                                 |
| ------------------------ | --------------------------- | ------------------------------------ |
| Brand                    | #14B8A6                     | `--primary`                          |
| Surface                  | White                       | `--background`, `--card`             |
| Body                     | Montserrat Medium 14/24     | Body defaults, `text-sm`             |
| Strong body              | Montserrat Bold 14/24       | `font-bold text-sm`                  |
| Button                   | Montserrat SemiBold 12px    | `Button`                             |
| Caption                  | Montserrat Medium 12/24     | Compact utility copy uses 12/20      |
| Brand / public headings  | Inknut Antiqua Black / Bold | `font-display`                       |
| Controls / cards         | 5px / 10px corners          | `rounded-control`, `rounded-card`    |
| Desktop header / sidebar | 80px / 250px                | `--header-height`, `--sidebar-width` |
| Desktop content padding  | 30px                        | `AppShell`                           |

Accessibility adjustments: Figma's white text on #14B8A6 and light grey secondary text have insufficient contrast for small text. Keep the exact brand fill; use #073B36 for button labels, #087C70 for links and #666666 for secondary text. Success/warning/error colors and feedback surfaces are foundation additions. Spacing uses Tailwind's 4px scale plus measured 30px content padding.

The showcase is not an existing Figma screen. Shared primitive and shell geometry follows the source frames. Below 768px, navigation becomes a toggled area and fields/cards collapse into fewer columns, extending the desktop-only designs. No admin design is invented.

Fonts are bundled through Fontsource; builds and page loads do not depend on Google Fonts. Exact SVG exports are in `public/figma` with no temporary URLs at runtime.
