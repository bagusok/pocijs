# Docs
## what is PociJS?
PociJS is a simple JavaScript library for rendering and mananging your data   
example :
```html
<div>
i learn a {{library}}
</div>
<script>
  const Root = new Poci.Init("div", {
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
note : meaning of the models is data  

## Hook Expression
Hook expression is a expression for accessing model, hook expression will use in an element   
example :
- {{ library }}
- {{ persons[0]->name }}
- {{ fruits[0] }}  

## Poci.Init.set
You can update model with **set method**, set is a method for updating or adding model  
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.set(Key, Value);
```  
example :
```html
<div id="root">
  {{name}}
</div>
<script>
  const Root = new Poci.Init("#root", {
     name:null
  });
  Root.set("name", "John");
</script>
```  
result :
```
John
```  

## Poci.Init.pull
pull is method for removing PociJS in root element  
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.pull();
```  
example :
```js
const Root = new Poci.Init("#root", {
  name:"John"
});
Root.pull();
Root.set("name", "John"); // Error
```

## Poci.Init.normalize
normalize is method for creating root element and children back to normal  
example :
```html
<div id="root">
  {{name}}
</div>
<script>
  const Root = new Poci.Init("#root", {
     name:null
  });
  Root.normalize();
</script>
```  
result :
```
{{name}}
```  
