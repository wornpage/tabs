# @wornpage/tabs

Svelte 5 tabs with named tablists, roving keyboard selection, stable tab-panel
relationships, compact horizontal overflow, visible focus, and touch-safe targets.

<!-- wornpage-delivery:v2 browser-bundle -->
## Delivery

`src/` is the canonical implementation and the Svelte consumer entry. `dist/`
is a generated browser bundle; run `bun run build` after source changes and
never edit `dist/` directly.

Repository text is checked out as LF through `.gitattributes`, so generated
output is byte-stable across Windows and Linux.

The shared [component delivery contract](https://github.com/wornpage/cli/blob/master/docs/component-delivery.md)
checks this declaration, package exports, packed files, and generated output.
<!-- /wornpage-delivery -->

## Install

```bash
bun add @wornpage/tabs
```

## Svelte

```svelte
<script>
  import { Tabs, tabDomIds } from '@wornpage/tabs';
  const tabs = [{ id: 'overview', label: 'Overview' }, { id: 'history', label: 'History' }];
  let active = $state('overview');
</script>

<Tabs id="project" label="Project sections" {tabs} bind:active />
{@const ids = tabDomIds('project', active)}
<section id={ids.panelId} role="tabpanel" aria-labelledby={ids.tabId}>
  Current panel content
</section>
```

`id` and `label` are optional for backward compatibility. Supply both whenever
the control switches panels. `tabDomIds()` gives the consumer the exact IDs used
by the component. Individual options may override `tabId` or `panelId`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `{ id, label, tabId?, panelId? }[]` | required | Tab definitions |
| `active` | `string` | `""` | Bindable selected id |
| `onchange` | `(id: string) => void` | none | Selection handler |
| `id` | `string` | none | Stable ID namespace for tabs and panels |
| `label` | `string` | `"Sections"` | Accessible tablist name |

## Commands

```bash
bun test
bun run build
```

## License

MIT
