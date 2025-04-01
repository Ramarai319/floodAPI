// const county = document.querySelector('#County')
// const button = document.querySelector('#floodButton')
// const bucket = document.querySelector('#severeDiv')


// const getFloodData = async() => {
//     const res = await axios.get(`https://environment.data.gov.uk/flood-monitoring/id/floods`)
//     console.log(res.data)
   
//     console.log(res.data.items)
//     const dataArr = res.data.items

//         const data = dataArr.map(data => data.floodArea.county) //extract all data in an array
//         console.log(data) 
        
   
      
// }
// getFloodData()



// button.addEventListener('click', async  () => {

//     const severityNumber = await getFloodData(county.value)
    
//     if(severityNumber === 1){
//         const warning = document.createElement('h3')
//         warning.textContent = 'Severe Flood Warning'
//         bucket.append(warning)
//     }   
//     if(severityNumber === 2){
//         const warning = document.createElement('h3')
//         warning.textContent = 'Flood Warning'
//         bucket.append(warning)
//     }
//     if(severityNumber === 3){
//         const warning = document.createElement('h3')
//         warning.textContent = 'Flood Alert'
//         bucket.append(warning)
//     }
//     if(severityNumber === 4){
//         const warning = document.createElement('h3')
//         warning.textContent = 'Warning no longer in force'
//         bucket.append(warning)
//     }
   
// })