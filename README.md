# Real-Life Patch Notes — The Comedy Changelog

[![make.fun competition](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![make.fun rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/sw897636-web/patch-notes-20261123/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![make.fun reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/sw897636-web/patch-notes-20261123/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

One genuine one-line patch note for a bug in real life, written for the
[make.fun](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
bounty "Real-Life Patch Notes: The Comedy Changelog".

> v6.0.3: fixed a bug where a 15-second song looped in your head for 6 hours with no way to kill the process.

## How it works

`main.ts` (Node 22, standard library only) writes the patch note to the output
directory, byte for byte — `MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`.
Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output `entry.txt` is a single line of 107 characters, and identical on
every run.

## License

MIT — see [LICENSE](LICENSE).
