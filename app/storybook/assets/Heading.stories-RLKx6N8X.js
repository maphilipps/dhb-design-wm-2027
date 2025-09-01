import { t as E, D as M, a as $, T as W } from './twig-cCMwvcWF.js'
import './_commonjsHelpers-_d1bhYXs.js'
$(W)
W.cache(!1)
const C = a => a,
  e = (a = {}) => {
    const b = E.twig({
      id: '/Users/marc.philipps/Sites/dhb-design-wm-2027/components/src/Components/Typography/Heading/heading.html.twig',
      data: [
        { type: 'raw', value: '<', position: { start: 0, end: 1 } },
        {
          type: 'output',
          position: { start: 1, end: 24 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'tag',
              match: ['tag'],
              position: { start: 1, end: 24 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 1, end: 24 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 1, end: 24 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: 'h1',
                  position: { start: 1, end: 24 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 1, end: 24 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        {
          type: 'raw',
          value: ' class="heading heading--',
          position: { start: 24, end: 49 },
        },
        {
          type: 'output',
          position: { start: 49, end: 73 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'level',
              match: ['level'],
              position: { start: 49, end: 73 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 49, end: 73 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 49, end: 73 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: '1',
                  position: { start: 49, end: 73 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 49, end: 73 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        { type: 'raw', value: ' heading--', position: { start: 73, end: 83 } },
        {
          type: 'output',
          position: { start: 83, end: 113 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'color',
              match: ['color'],
              position: { start: 83, end: 113 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 83, end: 113 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 83, end: 113 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: 'primary',
                  position: { start: 83, end: 113 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 83, end: 113 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        { type: 'raw', value: ' ', position: { start: 113, end: 114 } },
        {
          type: 'output',
          position: { start: 114, end: 139 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'classes',
              match: ['classes'],
              position: { start: 114, end: 139 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 114, end: 139 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 114, end: 139 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: '',
                  position: { start: 114, end: 139 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 114, end: 139 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        {
          type: 'raw',
          value: `"
     `,
          position: { start: 139, end: 146 },
        },
        {
          type: 'logic',
          token: {
            type: 'Twig.logic.type.if',
            stack: [
              {
                type: 'Twig.expression.type.variable',
                value: 'id',
                match: ['id'],
              },
            ],
            position: { start: 146, end: 157 },
            output: [
              {
                type: 'raw',
                value: 'id="',
                position: { start: 157, end: 161 },
              },
              {
                type: 'output',
                position: { start: 161, end: 169 },
                stack: [
                  {
                    type: 'Twig.expression.type.variable',
                    value: 'id',
                    match: ['id'],
                    position: { start: 161, end: 169 },
                  },
                ],
              },
              { type: 'raw', value: '"', position: { start: 169, end: 170 } },
            ],
          },
          position: {
            open: { start: 146, end: 157 },
            close: { start: 170, end: 181 },
          },
        },
        {
          type: 'raw',
          value: `>
  `,
          position: { start: 181, end: 185 },
        },
        {
          type: 'output',
          position: { start: 185, end: 199 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'text',
              match: ['text'],
              position: { start: 185, end: 199 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'raw',
              match: ['|raw', 'raw'],
              position: { start: 185, end: 199 },
            },
          ],
        },
        {
          type: 'raw',
          value: `
</`,
          position: { start: 199, end: 202 },
        },
        {
          type: 'output',
          position: { start: 202, end: 225 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'tag',
              match: ['tag'],
              position: { start: 202, end: 225 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 202, end: 225 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 202, end: 225 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: 'h1',
                  position: { start: 202, end: 225 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 202, end: 225 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        { type: 'raw', value: '>', position: { start: 225, end: 225 } },
      ],
      precompiled: !0,
    })
    b.options.allowInlineIncludes = !0
    try {
      let t = a.defaultAttributes ? a.defaultAttributes : []
      return (
        Array.isArray(t) || (t = Object.entries(t)),
        C(b.render({ attributes: new M(t), ...a }))
      )
    } catch (t) {
      return C(
        'An error occurred whilst rendering /Users/marc.philipps/Sites/dhb-design-wm-2027/components/src/Components/Typography/Heading/heading.html.twig: ' +
          t.toString(),
      )
    }
  },
  N = {
    title: 'Atoms/Typography/Heading',
    component: e,
    parameters: {
      layout: 'padded',
      docs: {
        description: {
          component:
            'The DHB Heading component provides semantic heading levels (H1-H6) with various display styles for different contexts. Includes display headings for hero sections, section headings with accent lines, and standard heading hierarchy.',
        },
      },
      backgrounds: {
        default: 'dhb-navy',
        values: [
          { name: 'dhb-navy', value: '#1a1a2e' },
          { name: 'white', value: '#ffffff' },
          { name: 'dhb-yellow', value: '#feca57' },
          { name: 'dhb-red', value: '#ff4757' },
        ],
      },
    },
    argTypes: {
      text: {
        control: 'text',
        description: 'The heading text content',
        table: { defaultValue: { summary: 'Heading Text' } },
      },
      tag: {
        control: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        description: 'HTML semantic tag for the heading',
        table: { defaultValue: { summary: 'h1' } },
      },
      level: {
        control: 'select',
        options: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          'display',
          'display-sm',
          'brand',
          'section',
          'section-large',
        ],
        description: 'Visual styling level (independent of semantic tag)',
        table: { defaultValue: { summary: '1' } },
      },
      color: {
        control: 'select',
        options: [
          'primary',
          'navy',
          'white',
          'yellow',
          'red',
          'gradient',
          'gradient-brand',
        ],
        description: 'Color variant of the heading',
        table: { defaultValue: { summary: 'primary' } },
      },
      id: { control: 'text', description: 'Optional ID attribute for linking' },
    },
    args: {
      text: 'World Championship',
      tag: 'h1',
      level: '1',
      color: 'primary',
    },
  },
  n = { args: { text: 'World Championship', tag: 'h1', level: '1' } },
  r = { args: { text: 'Match Schedule', tag: 'h2', level: '2' } },
  o = { args: { text: 'Tournament Results', tag: 'h3', level: '3' } },
  s = { args: { text: 'Team Statistics', tag: 'h4', level: '4' } },
  i = { args: { text: 'Player Information', tag: 'h5', level: '5' } },
  l = { args: { text: 'Game Details', tag: 'h6', level: '6' } },
  p = {
    args: {
      text: 'Where Handball Moves Us',
      tag: 'h1',
      level: 'display',
      color: 'gradient',
    },
  },
  d = {
    args: {
      text: 'Get Your Tickets Now!',
      tag: 'h2',
      level: 'display-sm',
      color: 'white',
    },
  },
  c = {
    args: {
      text: '27WM27',
      tag: 'h1',
      level: 'brand',
      color: 'gradient-brand',
    },
  },
  g = { args: { text: 'WM27WM', tag: 'div', level: 'brand', color: 'white' } },
  m = { args: { text: 'NEWS', tag: 'h2', level: 'section', color: 'yellow' } },
  h = { args: { text: 'VENUES', tag: 'h2', level: 'section', color: 'white' } },
  u = {
    args: {
      text: 'MATCH SCHEDULE',
      tag: 'h1',
      level: 'section-large',
      color: 'yellow',
    },
  },
  v = {
    args: {
      text: 'World Championship',
      tag: 'h1',
      level: '1',
      color: 'gradient',
    },
  },
  y = {
    args: { text: 'Match Schedule', tag: 'h2', level: '2', color: 'yellow' },
  },
  x = { args: { text: 'Live Results', tag: 'h2', level: '2', color: 'red' } },
  w = {
    args: { text: 'Tournament Info', tag: 'h2', level: '2', color: 'white' },
    parameters: { backgrounds: { default: 'dhb-navy' } },
  },
  f = {
    args: {
      text: 'Championship Details',
      tag: 'h2',
      level: '2',
      color: 'navy',
    },
    parameters: { backgrounds: { default: 'white' } },
  },
  H = {
    render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      ${e({ text: 'Display Heading - Hero Section', tag: 'h1', level: 'display', color: 'gradient' })}
      ${e({ text: 'H1 - Main Page Title', tag: 'h1', level: '1', color: 'white' })}
      ${e({ text: 'H2 - Major Section', tag: 'h2', level: '2', color: 'white' })}
      ${e({ text: 'SECTION HEADING', tag: 'h2', level: 'section', color: 'yellow' })}
      ${e({ text: 'H3 - Sub Section', tag: 'h3', level: '3', color: 'white' })}
      ${e({ text: 'H4 - Content Group', tag: 'h4', level: '4', color: 'white' })}
      ${e({ text: 'H5 - Content Subgroup', tag: 'h5', level: '5', color: 'white' })}
      ${e({ text: 'H6 - Detail Header', tag: 'h6', level: '6', color: 'white' })}
    </div>
  `,
    parameters: {
      docs: {
        description: {
          story:
            'Complete typography hierarchy showing all heading levels and their relative sizes.',
        },
      },
    },
  },
  S = {
    render: () => `
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Brand Elements from PDF -->
      <div style="text-align: center;">
        ${e({ text: '27WM27', tag: 'div', level: 'brand', color: 'gradient-brand' })}
        <p style="color: var(--dhb-muted, rgba(255,255,255,0.7)); margin-top: 0.5rem; font-size: 0.875rem; letter-spacing: 0.1em;">BRAND PATTERN</p>
      </div>
      
      <!-- Hero Section -->
      <div>
        ${e({ text: 'World Championship', tag: 'h1', level: 'display', color: 'white' })}
        <p style="color: var(--dhb-white); margin-top: 1rem; font-size: 1.125rem; font-weight: 500;">Germany 14.- 31.01.2027</p>
      </div>
      
      <!-- Call-to-Action Headings -->
      <div>
        ${e({ text: 'GET YOUR TICKETS NOW!', tag: 'h2', level: 'display-sm', color: 'white' })}
      </div>
      
      <!-- Large Section Headers -->
      <div>
        ${e({ text: 'MATCH SCHEDULE', tag: 'h1', level: 'section-large', color: 'yellow' })}
      </div>
      
      <!-- Standard Section Headers -->
      <div>
        ${e({ text: 'NEWS', tag: 'h2', level: 'section', color: 'yellow' })}
      </div>
      
      <div>
        ${e({ text: 'VENUES', tag: 'h2', level: 'section', color: 'white' })}
      </div>
      
      <!-- Gradient Display Headings -->
      <div>
        ${e({ text: 'WHERE HANDBALL MOVES US', tag: 'h1', level: 'display', color: 'gradient' })}
      </div>
      
      <!-- Page Title Example -->
      <div>
        ${e({ text: 'FAQ', tag: 'h1', level: 'display-sm', color: 'white' })}
      </div>
    </div>
  `,
    parameters: {
      docs: {
        description: {
          story:
            'Comprehensive examples of headings as they appear in the DHB Handball WM 2027 PDF design, including brand patterns, hero sections, call-to-actions, and section headers.',
        },
      },
    },
  },
  T = {
    render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; text-align: center;">
      ${e({ text: '27WM27', tag: 'div', level: 'brand', color: 'gradient-brand' })}
      ${e({ text: 'WM27WM', tag: 'div', level: 'brand', color: 'white' })}
      ${e({ text: '27WM27', tag: 'div', level: 'brand', color: 'yellow' })}
      ${e({ text: 'WM27WM', tag: 'div', level: 'brand', color: 'red' })}
    </div>
  `,
    parameters: {
      docs: {
        description: {
          story:
            'Brand typography patterns showing the distinctive 27WM27 styling used throughout the championship branding.',
        },
      },
    },
  }
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1'
  }
}`,
      ...n.parameters?.docs?.source,
    },
  },
}
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Match Schedule',
    tag: 'h2',
    level: '2'
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
}
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Tournament Results',
    tag: 'h3',
    level: '3'
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
}
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Team Statistics',
    tag: 'h4',
    level: '4'
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
}
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Player Information',
    tag: 'h5',
    level: '5'
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
}
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Game Details',
    tag: 'h6',
    level: '6'
  }
}`,
      ...l.parameters?.docs?.source,
    },
  },
}
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Where Handball Moves Us',
    tag: 'h1',
    level: 'display',
    color: 'gradient'
  }
}`,
      ...p.parameters?.docs?.source,
    },
  },
}
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Get Your Tickets Now!',
    tag: 'h2',
    level: 'display-sm',
    color: 'white'
  }
}`,
      ...d.parameters?.docs?.source,
    },
  },
}
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: '27WM27',
    tag: 'h1',
    level: 'brand',
    color: 'gradient-brand'
  }
}`,
      ...c.parameters?.docs?.source,
    },
  },
}
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'WM27WM',
    tag: 'div',
    level: 'brand',
    color: 'white'
  }
}`,
      ...g.parameters?.docs?.source,
    },
  },
}
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'NEWS',
    tag: 'h2',
    level: 'section',
    color: 'yellow'
  }
}`,
      ...m.parameters?.docs?.source,
    },
  },
}
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'VENUES',
    tag: 'h2',
    level: 'section',
    color: 'white'
  }
}`,
      ...h.parameters?.docs?.source,
    },
  },
}
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'MATCH SCHEDULE',
    tag: 'h1',
    level: 'section-large',
    color: 'yellow'
  }
}`,
      ...u.parameters?.docs?.source,
    },
  },
}
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1',
    color: 'gradient'
  }
}`,
      ...v.parameters?.docs?.source,
    },
  },
}
y.parameters = {
  ...y.parameters,
  docs: {
    ...y.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Match Schedule',
    tag: 'h2',
    level: '2',
    color: 'yellow'
  }
}`,
      ...y.parameters?.docs?.source,
    },
  },
}
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Live Results',
    tag: 'h2',
    level: '2',
    color: 'red'
  }
}`,
      ...x.parameters?.docs?.source,
    },
  },
}
w.parameters = {
  ...w.parameters,
  docs: {
    ...w.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Tournament Info',
    tag: 'h2',
    level: '2',
    color: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy'
    }
  }
}`,
      ...w.parameters?.docs?.source,
    },
  },
}
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    text: 'Championship Details',
    tag: 'h2',
    level: '2',
    color: 'navy'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}`,
      ...f.parameters?.docs?.source,
    },
  },
}
H.parameters = {
  ...H.parameters,
  docs: {
    ...H.parameters?.docs,
    source: {
      originalSource: `{
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      \${Component({
    text: 'Display Heading - Hero Section',
    tag: 'h1',
    level: 'display',
    color: 'gradient'
  })}
      \${Component({
    text: 'H1 - Main Page Title',
    tag: 'h1',
    level: '1',
    color: 'white'
  })}
      \${Component({
    text: 'H2 - Major Section',
    tag: 'h2',
    level: '2',
    color: 'white'
  })}
      \${Component({
    text: 'SECTION HEADING',
    tag: 'h2',
    level: 'section',
    color: 'yellow'
  })}
      \${Component({
    text: 'H3 - Sub Section',
    tag: 'h3',
    level: '3',
    color: 'white'
  })}
      \${Component({
    text: 'H4 - Content Group',
    tag: 'h4',
    level: '4',
    color: 'white'
  })}
      \${Component({
    text: 'H5 - Content Subgroup',
    tag: 'h5',
    level: '5',
    color: 'white'
  })}
      \${Component({
    text: 'H6 - Detail Header',
    tag: 'h6',
    level: '6',
    color: 'white'
  })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Complete typography hierarchy showing all heading levels and their relative sizes.'
      }
    }
  }
}`,
      ...H.parameters?.docs?.source,
    },
  },
}
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `{
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Brand Elements from PDF -->
      <div style="text-align: center;">
        \${Component({
    text: '27WM27',
    tag: 'div',
    level: 'brand',
    color: 'gradient-brand'
  })}
        <p style="color: var(--dhb-muted, rgba(255,255,255,0.7)); margin-top: 0.5rem; font-size: 0.875rem; letter-spacing: 0.1em;">BRAND PATTERN</p>
      </div>
      
      <!-- Hero Section -->
      <div>
        \${Component({
    text: 'World Championship',
    tag: 'h1',
    level: 'display',
    color: 'white'
  })}
        <p style="color: var(--dhb-white); margin-top: 1rem; font-size: 1.125rem; font-weight: 500;">Germany 14.- 31.01.2027</p>
      </div>
      
      <!-- Call-to-Action Headings -->
      <div>
        \${Component({
    text: 'GET YOUR TICKETS NOW!',
    tag: 'h2',
    level: 'display-sm',
    color: 'white'
  })}
      </div>
      
      <!-- Large Section Headers -->
      <div>
        \${Component({
    text: 'MATCH SCHEDULE',
    tag: 'h1',
    level: 'section-large',
    color: 'yellow'
  })}
      </div>
      
      <!-- Standard Section Headers -->
      <div>
        \${Component({
    text: 'NEWS',
    tag: 'h2',
    level: 'section',
    color: 'yellow'
  })}
      </div>
      
      <div>
        \${Component({
    text: 'VENUES',
    tag: 'h2',
    level: 'section',
    color: 'white'
  })}
      </div>
      
      <!-- Gradient Display Headings -->
      <div>
        \${Component({
    text: 'WHERE HANDBALL MOVES US',
    tag: 'h1',
    level: 'display',
    color: 'gradient'
  })}
      </div>
      
      <!-- Page Title Example -->
      <div>
        \${Component({
    text: 'FAQ',
    tag: 'h1',
    level: 'display-sm',
    color: 'white'
  })}
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive examples of headings as they appear in the DHB Handball WM 2027 PDF design, including brand patterns, hero sections, call-to-actions, and section headers.'
      }
    }
  }
}`,
      ...S.parameters?.docs?.source,
    },
  },
}
T.parameters = {
  ...T.parameters,
  docs: {
    ...T.parameters?.docs,
    source: {
      originalSource: `{
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 2rem; text-align: center;">
      \${Component({
    text: '27WM27',
    tag: 'div',
    level: 'brand',
    color: 'gradient-brand'
  })}
      \${Component({
    text: 'WM27WM',
    tag: 'div',
    level: 'brand',
    color: 'white'
  })}
      \${Component({
    text: '27WM27',
    tag: 'div',
    level: 'brand',
    color: 'yellow'
  })}
      \${Component({
    text: 'WM27WM',
    tag: 'div',
    level: 'brand',
    color: 'red'
  })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Brand typography patterns showing the distinctive 27WM27 styling used throughout the championship branding.'
      }
    }
  }
}`,
      ...T.parameters?.docs?.source,
    },
  },
}
const L = [
  'Heading1',
  'Heading2',
  'Heading3',
  'Heading4',
  'Heading5',
  'Heading6',
  'DisplayLarge',
  'DisplaySmall',
  'BrandLarge',
  'BrandWhite',
  'SectionHeading',
  'SectionVenues',
  'SectionLarge',
  'GradientHeading',
  'YellowHeading',
  'RedHeading',
  'WhiteOnNavy',
  'NavyOnWhite',
  'TypographyHierarchy',
  'PDFExamples',
  'BrandTypographyShowcase',
]
export {
  c as BrandLarge,
  T as BrandTypographyShowcase,
  g as BrandWhite,
  p as DisplayLarge,
  d as DisplaySmall,
  v as GradientHeading,
  n as Heading1,
  r as Heading2,
  o as Heading3,
  s as Heading4,
  i as Heading5,
  l as Heading6,
  f as NavyOnWhite,
  S as PDFExamples,
  x as RedHeading,
  m as SectionHeading,
  u as SectionLarge,
  h as SectionVenues,
  H as TypographyHierarchy,
  w as WhiteOnNavy,
  y as YellowHeading,
  L as __namedExportsOrder,
  N as default,
}
