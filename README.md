# use-document-visibility

>

[![NPM](https://img.shields.io/npm/v/use-document-visibility.svg)](https://www.npmjs.com/package/use-document-visibility) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @heyanniemoran/use-document-visibility
```

## Usage

```jsx
import React, { useEffect } from 'react'
import useDocumentVisibility from '@heyanniemoran/use-document-visibility'

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log('first handler', isVisible)
    });
    onVisibilityChange((isVisible) => {
      console.log('second handler', isVisible)
    });
  }, [])

  return (
    <div>
      <span>
        Вы покинули страницу: {count} раз
        Вкладка активна? {visible ? 'да' : 'нет'}
      </span>
    </div>
  );
};
```

## License

MIT © [heyanniemoran](https://github.com/heyanniemoran)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
