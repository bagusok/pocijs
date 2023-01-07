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
you can install PociJS with NPM or Script  
### NPM
```
npm install poci
```

### Script
```html
```html
<script type="module">
   import Poci from "https://cdn.jsdelivr.net/npm/poci@1.0.1-beta/dist/main.mjs";
</script>
```  
```

## Poci.Init
after install PociJS with NPM or Script, you need to init the PociJS   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
```  
note : meaning of the models is data  

## Hook Expression
hook expression is a expression for accessing model, hook expression will use in an element   
example :
- {{ library }}
- {{ persons[0]->name }}
- {{ fruits[0] }}  

## Poci.Init.set
you can update model with **set method**, set is a method for updating or adding model  
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.set(key : string, value : value);
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
render is method for rendering root element and the children   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.render();
```  

## Model Connection
in PociJS you can connect your model to some elements(input, textarea, select)  
### Create Connection
For create connection you just add ```data-connectFor``` Attribute to the element  
```
data-connectFor="key"
```   
note : resulting value will be of type string

### Listen the connection
you can run a function when key change  
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
you can use disconnect method for stopping Connection of 1 element   
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

have fun<3
