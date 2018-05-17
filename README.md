# Applanga Duplicator

**Duplicates groups from one language to another in Applanga**

## Installation

Node 8 is required. Clone this repo and run `npm install`. Copy `.env.example` to `.env`, and fill it in.

## Usage

### Example

```sh
node index.js --group base --from fr-BE --to en-IE [--approve]
```

### Flags

- `group`: Which group to clone
- `from`: Language to copy from
- `to`: Language to copy to
- `approve`: Whether to automatically approve the translations. Defaults to false.
