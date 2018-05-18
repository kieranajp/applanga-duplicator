# Applanga Duplicator

**Duplicates groups from one language to another in Applanga**

## Installation

Node 8 is required. Clone this repo and run `npm install`. Copy `.env.example` to `.env`, and fill it in.

## Usage

### Example

```sh
node index.js --groups base,other --from fr-BE --to en-IE [--approve] [--dry-run]
```

### Flags

- `groups`: Which groups to clone (comma-separated)
- `from`: Language to copy from
- `to`: Language to copy to
- `approve`: Whether to automatically approve the translations. Defaults to false.
- `dry-run`: Don't actually save anything to applanga. Defaults to false.
