# Docs
## what is PociJS?
PociJS is a simple JavaScript library for rendering and mananging your data   
example :
```html
<div>
i learn a {{library}}
</div>
<script>
  const root = new Poci.Init("div", {
    library:"Poci"
  });
</script>
```  
result :
```
i learn a Poci
```

## install
You can install PociJS with NPM or Script  
### NPM
```
npm install pocijs
```

### Script
```html
<script src=""></script>
```

## Poci.Init
After install PociJS with NPM or Script, you need to init the PociJS   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
```  
note : meaning of the model is data  

## Hook Expression
Hook expression is a expression for access model, hook expression will use in an element   
example :
- {{ library }}
- {{ persons[0]->name }}
- {{ fruits[0] }}  

## Poci.Init.Set
