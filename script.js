let sc = document.querySelector('#sc')
let mn = document.querySelector('#mn')
let hr = document.querySelector('#hr')

setInterval(()=>{
    let date = new Date()
    let ss = date.getSeconds()
    let mm = date.getMinutes()
    let hh = date.getHours()+1
    hr.style.transform = `rotateZ(${(hh * 30)+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm * 6}deg)`
    sc.style.transform = `rotateZ(${ss * 6}deg)`

    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let secondes = document.getElementById("secondes")
    let apm = document.getElementById("apm")
    
    apm.innerHTML = hh<=12 ? "AM" : "PM"
    hh= hh>12 ? hh-12 : hh

    hours.innerHTML = hh<10 ? `0${hh}` : hh
    minutes.innerHTML = mm<10 ? `0${mm}` : mm
    secondes.innerHTML = ss<10 ? `0${ss}` : ss
})