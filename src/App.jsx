import './App.css'






function App() {

  const nftCard =(
    <div style={{margin:'0',display:'flex',justifyContent:'center',alignItems:'center',background: '#0D192C',width: '100vw',height: '100vh'}}> 
      <div className='box1' style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'25px',width: '350px',height: '596px',padding:'20px',background:'#15263F',borderRadius: '15px',boxShadow: '0px 25px 50px 0px rgba(0, 0, 0, 0.10)',fontFamily:'Outfit'}}>
      <img style={{width:'302px',height:'302px',borderRadius:'37px'}} src="Rectangle.svg" alt="" />
      <div style={{width:'100%',display:'flex',justifyContent: 'flex-start',color:'white',fontSize:'22px',fontWeight:'600'}}>Equilibrium #3429</div>
      <div style={{display:'flex',justifyContent:'flex-start',width:'100%',color:'#8BACD9',fontSize:'18px',fontWeight:'300'}}>Our Equilibrium collection promotes balance and calm.</div>
      <div style={{display:'flex',justifyContent: 'space-between',width:'100%',alignItems:'center',fontSize: '16px'}}>
        <span style={{color: '#00FFF8',fontWeight:'600'}}><img src="ether.svg" alt="" /> 0.041 ETH</span>
        <span style={{color:'#8BACD9'}}><img src="Clock.svg" alt="" /> 3 days left</span  >
      </div>
      <div style={{background:'#2E405A',width: '302px',height:'1px'}}></div>
      <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'flex-start',gap:'20px',fontSize:'16px',color:'#8BACD9'}}> <img src="Oval.svg" alt="" /><div>Creation of <span style={{color:'white'}}>  Jules Wyvern</span></div></div>
      
      </div>

    </div>
   
  ) 
 

  return (
    <>
    <div>{nftCard}</div>
    
      
    </>
  )
}

export default App 

