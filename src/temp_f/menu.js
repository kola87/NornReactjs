import React from 'react';
class Menu extends React.Component{
    render(){
        
        let menus = [
            "Главная страница",
            "Курсы",
            "Летняя школа",
            "Контакты",
            "О нас"
        ] 
        return <div className="menu">
             {menus.map((value, index) =>{
            return <div key={index}><Links label={value} /></div>
             })}
        </div>
    }
}
class Links extends React.Component{
    render(){ 
 const url = "/" + this.props.label;
 return <div>
     <a href={url}>{this.props.label}</a>
 </div>
    }
}


export default Menu;