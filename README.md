<div align="center">

# Poci
License : MIT  
Poci is a JavaScript Library for **rendering a data** with size < 5kb    
```npm install poci```

</div><br/>

## Install
You can install poci with NPM or PNPM or YARN or Script :   
### NPM
```npm install poci```   

### PNPM
```pnpm add poci```   

### YARN
```yarn install poci```   

### Script
```<script src=""></script>```
</div>

## About
Poci is a JavaScript Library for rendering a data  

## Example
### 1
```html
<div id="root">
   <p>My name is {{ name }}</p>
</div>
<script>
   const App = new Poci.Init("#root", {
     name:"Zen"
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
      const time = new Date().toString();
      App.set("date", time);
   },1000);
</script>
```
[Learn More](poci.netfliy.app/docs)
## License
MIT
