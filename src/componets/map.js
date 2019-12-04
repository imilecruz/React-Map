import React, { Component } from 'react';
import '../App.css';


class Map extends Component {
   constructor(props){
       super(props);
       this.state = {
           alunos: [
            {   
                nome: 'Kamile',
                idade: '16 anos'
            },
            {   
                nome: 'Breno',
                idade: '18 anos'
            },
            {   
                nome: 'Jeziel',
                idade: '33 anos'
            },
            {   
                nome: 'Zaíra',
                idade: '25 anos'
            },
            {   
                nome: 'Matheus',
                idade: '20 anos'
            },
           ]
       };
    } 

   listarAlunos = () => {
        this.state.alunos.map(item => {
            console.log(item.nome)
       })
   }

  render() {
    return (
		<div className='caixona'>
		{this.state.alunos.map((item, index) => {
            return (
				<div className='caixinha' key={index}>
					<h1>{item.nome}</h1>
					<h2>{item.idade}</h2>
				</div>
			)
	   })
		}
	   </div>
    );
  }

}


export default Map;