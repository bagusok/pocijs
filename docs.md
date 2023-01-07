# Docs
## what is Poci?
Poci is a simple JavaScript library for rendering and mananging your data   
example :
```html
<div>
i learn a {{library}}
</div>
<script>
  new Poci.Init("div", {
    library:"Poci"
  });
</script>
```  
result :
```
i learn a Poci
```

## install
You can install Poci with NPM or Script  
### NPM
```
npm install poci
```

### Script
```html
<script src=""></script>
```

## Poci.Init
After install Poci with NPM or Script, you need init the Poci   
```js
const Name = new Poci.Init(selector, models);
```
