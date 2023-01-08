<div align="center">

# PociJS
License : MIT  
PociJS adalah sebuah JavaScript library untuk **rendering dan mengelola data**    
```npm install poci```

</div><br/>

## Install
kita bisa menggunakan NPM / CDN untuk menginstall poci   
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

</div>


## Example
### 1
```html
<div id="root">
   <p>My name is {{ name }}</p>
</div>
<script>
   const App = new Poci.Init("#root", {
     name:"John"
   });
</script>
```  

### 2
```html
<div id="root">
   <h1>{{ date }}</h1>
</div>
<script>
   const App = new Poci.Init("#root", {
      date:""
   });

   setInterval(()=>{
      const time = new Date().toDateString();
      App.set("date", time);
   },1000);
</script>
```

[Learn More](./docs.md)

## Donate
Saweria : https://saweria.co/nokinoki

## License
MIT
