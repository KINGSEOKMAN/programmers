function solution(picture, k) {
 const expandedPicture = [];  
  for (let i = 0; i < picture.length; i++) {
    const expandedRow = picture[i].split('').map(pixel => pixel.repeat(k));  

     for(let j=0; j<k; j++){
         expandedPicture.push(expandedRow.join(''))
     }
  }

  return expandedPicture;  
}