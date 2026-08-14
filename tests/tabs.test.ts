import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { tabDomIds } from '../src/ids.js';

const source = readFileSync(new URL('../src/Tabs.svelte', import.meta.url), 'utf8').replace(/\r\n/gu, '\n');
const elementSource = readFileSync(new URL('../src/TabsElement.svelte', import.meta.url), 'utf8').replace(/\r\n/gu, '\n');
const demoSource = readFileSync(new URL('../index.html', import.meta.url), 'utf8').replace(/\r\n/gu, '\n');

describe('tab semantics', () => {
	test('names an oriented tablist and exposes stable panel relationships', () => {
		expect(source).toContain('role="tablist" aria-label={label} aria-orientation="horizontal"');
		expect(source).toContain('role="tab"');
		expect(source).toContain('id={domIds.tabId}');
		expect(source).toContain('aria-controls={domIds.panelId}');
		expect(source).toContain('aria-selected={tab.id === active}');
	});

	test('keeps the existing bindable selection API and repairs invalid state', () => {
		expect(source).toContain("active = $bindable('')");
		expect(source).toContain('!tabs.some((tab) => tab.id === active)');
		expect(source).toContain('onchange?.(tabId);');
	});

	test('creates deterministic safe ids', () => {
		expect(tabDomIds('catalog', 'Web components')).toEqual({
			tabId: 'catalog-tab-Web-components',
			panelId: 'catalog-panel-Web-components',
		});
	});
});

describe('keyboard and compact behavior', () => {
	test('supports roving Arrow, Home, and End selection', () => {
		expect(source).toContain("event.key === 'ArrowRight'");
		expect(source).toContain("event.key === 'ArrowLeft'");
		expect(source).toContain("event.key === 'Home'");
		expect(source).toContain("event.key === 'End'");
		expect(source).toContain('targetButton.focus();');
	});

	test('owns containment, touch targets, and horizontal overflow', () => {
		expect(source).toContain('max-inline-size: 100%;');
		expect(source).toContain('min-inline-size: 0;');
		expect(source).toContain('overflow-x: auto;');
		expect(source).toContain('overscroll-behavior-inline: contain;');
		expect(source).toContain('min-block-size: 44px;');
		expect(source).toContain('touch-action: manipulation;');
	});

	test('honors reduced-motion preferences', () => {
		expect(source).toContain('@media (prefers-reduced-motion: reduce)');
		expect(source).toContain('transition: none;');
	});
});

describe('browser delivery', () => {
	test('wraps the canonical component and emits selection changes', () => {
		expect(elementSource).toContain("tag: 'worn-tabs'");
		expect(elementSource).toContain('<Tabs bind:active {tabs} id={controlId} {label} onchange={handleChange} />');
		expect(elementSource).toContain("new CustomEvent('change', { detail: { id }, bubbles: true })");
	});

	test('demo renders the real bundle with matching panels', () => {
		expect(demoSource).toContain('src="./dist/worn-tabs.js"');
		expect(demoSource).toContain("control.controlId = 'portfolio'");
		expect(demoSource).toContain('role="tabpanel"');
		expect(demoSource).toContain("panel.id = `portfolio-panel-${option.id}`");
		expect(demoSource).toContain("panel.setAttribute('aria-labelledby', `portfolio-tab-${option.id}`)");
	});
});
