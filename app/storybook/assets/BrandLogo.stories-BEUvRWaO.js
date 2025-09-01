import { t as y, D as x, a as h, T as b } from './twig-cCMwvcWF.js'
import './_commonjsHelpers-_d1bhYXs.js'
h(b)
b.cache(!1)
const v = t => t,
  e = (t = {}) => {
    const g = y.twig({
      id: '/Users/marc.philipps/Sites/dhb-design-wm-2027/components/src/Components/Typography/BrandLogo/brand-logo.html.twig',
      data: [
        {
          type: 'raw',
          value: '<div class="brand-logo brand-logo--',
          position: { start: 0, end: 35 },
        },
        {
          type: 'output',
          position: { start: 35, end: 67 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'variant',
              match: ['variant'],
              position: { start: 35, end: 67 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 35, end: 67 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 35, end: 67 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: 'default',
                  position: { start: 35, end: 67 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 35, end: 67 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        { type: 'raw', value: ' ', position: { start: 67, end: 68 } },
        {
          type: 'output',
          position: { start: 68, end: 93 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'classes',
              match: ['classes'],
              position: { start: 68, end: 93 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 68, end: 93 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 68, end: 93 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: '',
                  position: { start: 68, end: 93 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 68, end: 93 },
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
          position: { start: 93, end: 100 },
        },
        {
          type: 'logic',
          token: {
            type: 'Twig.logic.type.if',
            stack: [
              {
                type: 'Twig.expression.type.variable',
                value: 'animate',
                match: ['animate'],
              },
            ],
            position: { start: 100, end: 116 },
            output: [
              {
                type: 'raw',
                value: 'data-animate="brand-pulse"',
                position: { start: 116, end: 142 },
              },
            ],
          },
          position: {
            open: { start: 100, end: 116 },
            close: { start: 142, end: 153 },
          },
        },
        {
          type: 'raw',
          value: `>
  <span class="brand-logo__text">`,
          position: { start: 153, end: 188 },
        },
        {
          type: 'output',
          position: { start: 188, end: 222 },
          stack: [
            {
              type: 'Twig.expression.type.variable',
              value: 'brand_text',
              match: ['brand_text'],
              position: { start: 188, end: 222 },
            },
            {
              type: 'Twig.expression.type.filter',
              value: 'default',
              match: ['|default', 'default'],
              position: { start: 188, end: 222 },
              params: [
                {
                  type: 'Twig.expression.type.parameter.start',
                  value: '(',
                  match: ['('],
                  position: { start: 188, end: 222 },
                },
                {
                  type: 'Twig.expression.type.string',
                  value: '27WM27',
                  position: { start: 188, end: 222 },
                },
                {
                  type: 'Twig.expression.type.parameter.end',
                  value: ')',
                  match: [')'],
                  position: { start: 188, end: 222 },
                  expression: !1,
                },
              ],
            },
          ],
        },
        {
          type: 'raw',
          value: `</span>
</div>`,
          position: { start: 222, end: 222 },
        },
      ],
      precompiled: !0,
    })
    g.options.allowInlineIncludes = !0
    try {
      let a = t.defaultAttributes ? t.defaultAttributes : []
      return (
        Array.isArray(a) || (a = Object.entries(a)),
        v(g.render({ attributes: new x(a), ...t }))
      )
    } catch (a) {
      return v(
        'An error occurred whilst rendering /Users/marc.philipps/Sites/dhb-design-wm-2027/components/src/Components/Typography/BrandLogo/brand-logo.html.twig: ' +
          a.toString(),
      )
    }
  },
  W = {
    title: 'Atoms/Typography/BrandLogo',
    component: e,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            'The DHB Brand Logo component displays the "27WM27" branding with various sizes and color variants. This is the primary brand element used throughout the DHB Handball World Championship 2027 website.',
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
      brand_text: {
        control: 'text',
        description: 'The text content for the brand logo',
        table: { defaultValue: { summary: '27WM27' } },
      },
      variant: {
        control: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        description: 'Size variant of the brand logo',
        table: { defaultValue: { summary: 'md' } },
      },
      color: {
        control: 'select',
        options: ['primary', 'white', 'navy'],
        description: 'Color variant of the brand logo',
        mapping: {
          primary: 'brand-logo--primary',
          white: 'brand-logo--white',
          navy: 'brand-logo--navy',
        },
      },
      animate: {
        control: 'boolean',
        description: 'Enable brand pulse animation',
        table: { defaultValue: { summary: !1 } },
      },
    },
    args: {
      brand_text: '27WM27',
      variant: 'md',
      color: 'primary',
      animate: !1,
    },
  },
  r = { args: { brand_text: '27WM27', variant: 'md' } },
  n = { args: { brand_text: '27WM27', variant: 'xs' } },
  s = { args: { brand_text: '27WM27', variant: 'sm' } },
  o = { args: { brand_text: '27WM27', variant: 'md' } },
  i = { args: { brand_text: '27WM27', variant: 'lg' } },
  p = { args: { brand_text: '27WM27', variant: 'xl' } },
  d = {
    args: { brand_text: '27WM27', variant: 'lg', classes: 'brand-logo--white' },
    parameters: { backgrounds: { default: 'dhb-navy' } },
  },
  l = {
    args: { brand_text: '27WM27', variant: 'lg', classes: 'brand-logo--navy' },
    parameters: { backgrounds: { default: 'white' } },
  },
  c = { args: { brand_text: '27WM27', variant: 'lg', animate: !0 } },
  m = { args: { brand_text: 'WM27', variant: 'lg' } },
  u = {
    render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      ${e({ brand_text: '27WM27', variant: 'xs' })}
      ${e({ brand_text: '27WM27', variant: 'sm' })}
      ${e({ brand_text: '27WM27', variant: 'md' })}
      ${e({ brand_text: '27WM27', variant: 'lg' })}
      ${e({ brand_text: '27WM27', variant: 'xl' })}
    </div>
  `,
    parameters: {
      docs: {
        description: {
          story:
            'Showcase of all available brand logo sizes from extra small to extra large.',
        },
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
    brand_text: '27WM27',
    variant: 'md'
  }
}`,
      ...r.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'xs'
  }
}`,
      ...n.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'sm'
  }
}`,
      ...s.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'md'
  }
}`,
      ...o.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'lg'
  }
}`,
      ...i.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'xl'
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
    brand_text: '27WM27',
    variant: 'lg',
    classes: 'brand-logo--white'
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy'
    }
  }
}`,
      ...d.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'lg',
    classes: 'brand-logo--navy'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}`,
      ...l.parameters?.docs?.source,
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
    brand_text: '27WM27',
    variant: 'lg',
    animate: true
  }
}`,
      ...c.parameters?.docs?.source,
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
    brand_text: 'WM27',
    variant: 'lg'
  }
}`,
      ...m.parameters?.docs?.source,
    },
  },
}
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `{
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      \${Component({
    brand_text: '27WM27',
    variant: 'xs'
  })}
      \${Component({
    brand_text: '27WM27',
    variant: 'sm'
  })}
      \${Component({
    brand_text: '27WM27',
    variant: 'md'
  })}
      \${Component({
    brand_text: '27WM27',
    variant: 'lg'
  })}
      \${Component({
    brand_text: '27WM27',
    variant: 'xl'
  })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available brand logo sizes from extra small to extra large.'
      }
    }
  }
}`,
      ...u.parameters?.docs?.source,
    },
  },
}
const _ = [
  'Default',
  'ExtraSmall',
  'Small',
  'Medium',
  'Large',
  'ExtraLarge',
  'WhiteOnNavy',
  'NavyOnWhite',
  'WithAnimation',
  'CustomText',
  'AllSizes',
]
export {
  u as AllSizes,
  m as CustomText,
  r as Default,
  p as ExtraLarge,
  n as ExtraSmall,
  i as Large,
  o as Medium,
  l as NavyOnWhite,
  s as Small,
  d as WhiteOnNavy,
  c as WithAnimation,
  _ as __namedExportsOrder,
  W as default,
}
