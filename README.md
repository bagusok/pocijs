<div align="center">

# Poci
License : MIT  
Poci is a JavaScript Library for **rendering and mananging your data**    
```npm install poci```

</div><br/>

## Install
You can install poci with NPM or Script :   
### NPM
```npm install poci```   

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
      const time = new Date().toDateString();
      App.set("date", time);
   },1000);
</script>
```

[Learn More](poci.netfliy.app/docs)

## License
MIT
