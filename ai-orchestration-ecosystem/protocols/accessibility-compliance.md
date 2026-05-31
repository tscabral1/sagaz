# Protocol: Accessibility Compliance

## Objective

Make user interfaces usable by people with different abilities and devices.

## Required Checks

- Keyboard navigation.
- Visible focus states.
- Semantic landmarks and headings.
- Accessible labels for controls.
- Color contrast.
- Touch target size.
- Screen reader friendly states.
- Error messages connected to fields.
- Reduced motion support when motion is meaningful.
- No information conveyed by color alone.

## Output

```md
Accessibility review:
Viewports/components checked:
Keyboard:
Focus:
Labels:
Contrast:
Screen reader considerations:
Issues:
Verdict:
```

## Blocking Conditions

- Primary flow cannot be completed by keyboard when applicable.
- Important controls lack accessible names.
- Text contrast blocks readability.

