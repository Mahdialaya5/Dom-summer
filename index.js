const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        const HexaD = '0123456789ABCDEF';
        let Randomcolor = '#';
        for (let i = 0; i < 6; i++) {
            Randomcolor += HexaD[Math.floor(Math.random() * 16)];
        }
        return Randomcolor;
    }

changeColorBtn.addEventListener("click",function random() {
  
  let color=getRandomColor() 
  
  colorBox.style.backgroundColor=color 

})