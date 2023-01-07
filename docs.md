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
Name.set(Key : string, Value : value);
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
normalize is method for creating root element and the children back to normal  
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.normalize();
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
  Root.normalize();
</script>
```  
result :
```
{{name}}
```  

## Poci.Init.track
track is method for tracking change on root element and the children   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.track();
```  
example :  
```js
const Root = new Poci.Init("#root", {
   name:"John"
});
document
  .querySelector("#root")
  .setAttribute("class", "root");
Root.track();
```  
note : PociJS won't track elements content or attributes value

## Poci.Init.render
Render is method for rendering root element and the children   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.render();
```  

## Model Connection
In PociJS you can connect your model to some elements(input, textarea, select)  
### Create Connection
For create connection you just add ```data-connectFor``` Attribute to the element  
```
data-connectFor="key"
```   

### Listen the connection
You can run a function when key change  
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.listenConnection(key : string, callback({key:string, value:value}) : function);
```  
example :  
```html
<div id="root">
  <input type="text" data-connectFor="name" />
</div>
<script>
  const Root = new Poci.Init("#root", {
     name:null
  });
  Root.listenConnect("name", ({value})=>{
     console.info(value);
  });
</script>
```  
note : callback will only be called when the model is modified by an input element

### disconnect
You can use disconnect method for stopping Connection of 1 element   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.disconnect(connectionLabel : string);
```  
example :  
```html
<div id="root">
  <input type="text" data-connectFor="name" />
</div>
<script>
  const Root = new Poci.Init("#root", {
     name:null
  });
  Root.disconnect(
   document.querySelector("input").$$label
  );
</script>
```  
note : connection Label will save in DOM Element with ```$$label``` key
