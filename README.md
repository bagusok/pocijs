<div align="center">

# PociJS
License : MIT  
PociJS is a JavaScript Library for **rendering and mananging your data**    
```npm install poci```

</div><br/>

## Install
You can install PociJS with NPM or Script :   
### NPM
```npm install pocijs```   

### Script
```<script src=""></script>```  

! not recommended for production !

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

## License
MIT
