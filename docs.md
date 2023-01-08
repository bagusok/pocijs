# Docs
## what is PociJS?
PociJS adalah sebuah library yang sederhana untuk rendering dan mengelola data   
contoh :
```html
<div>
i learn {{library}}
</div>
<script>
  const Root = new Poci.Init("div", {
    library:"Poci"
  });
</script>
```  
hasil :
```
i learn Poci
```

## install
kita bisa menggunakan NPM / CDN untuk menginstall PociJS  
### NPM
```
npm install poci
```

### Script
```html
<script type="module">
   import Poci from "https://cdn.jsdelivr.net/npm/poci@1.0.1-beta/dist/main.mjs";
</script>
```  

## Poci.Init
untuk memulai kita perlu melakukan **Init** ke root elementnya   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
```  
catatan : models itu data

## Hook Expression
hook expression adalah expression untuk mengambil nilai   
contoh :   
- {{ library }}
- {{ persons[0]->name }}
- {{ fruits[0] }}  

## Poci.Init.set
kamu bisa memperbarui / menambah model dengan **set method**, set adalah sebuah method untuk memperbarui / menambah model   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.set(key : string, value : value);
```  
contoh :
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
hasil :
```
John
```  

## Poci.Init.pull
pull adalah method untuk menghapus PociJS pada rootnya   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.pull();
```  
contoh :
```js
const Root = new Poci.Init("#root", {
  name:"John"
});
Root.pull();
Root.set("name", "John"); // Error
```

## Poci.Init.track
track adalah method untuk melacak perubahan yang terjadi di root beserta childrennya    
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
catatan : PociJS tidak akan melacak perubahan element dan attributes valuenya

## Poci.Init.render
render adalah method untuk rendering root element beserta childrennya   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.render();
```  

## Model Connection
kita bisa menghubungkan model kita ke element input, element textarea dan element select
### Create Connection
untuk menghubungkan model ke element kita hanya perlu menambahkan attribute  ```data-connectFor``` ke element    
```
data-connectFor="key"
```   

### Listen the connection
kita juga bisa dengarkan key yang berubah karena koneksi     
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.listenConnection(key : string, callback({key:string, value:value}) : function);
```  
contoh :  
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

### disconnect
kita bisa menghentikan koneksi yang terjadi pada 1 element   
```js
const Name = new Poci.Init(rootSelector : string, models : object);
Name.disconnect(connectionLabel : string);
```  
contoh :  
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
catatan : koneksi label akan disimpan di DOM dalam bentuk key ```$$label```

have fun<3
