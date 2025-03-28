import './style.css';

const MyComponent = () => {
    const horashi = {
        name: "Horashi Dev",
        age: 21
    }
    return (
       <>
      <div><p>{JSON.stringify(horashi)} My Component & Horashi hoi dan Dev</p></div>
      <div className='child' style={{borderRadius: "10px", backgroundColor: "orange"}}>Child</div>
      </>
    );
  }

  export default MyComponent