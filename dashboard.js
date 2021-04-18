const body = document.getElementsByTagName('body')[0]
const hamburger = document.querySelector('.hamburger')

const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'


// Theme

function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
  }

  function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }
  
  loadTheme()
  
  function loadTheme() {
      var theme = getCookie(themeCookieName)
      body.classList.add(theme === "" ? themeLight : theme)
  }
  
  function switchTheme() {
      if (body.classList.contains(themeLight)) {
          body.classList.remove(themeLight)
          body.classList.add(themeDark)
          setCookie(themeCookieName, themeDark)
      } else {
          body.classList.remove(themeDark)
          body.classList.add(themeLight)
          setCookie(themeCookieName, themeLight)
      }
  }

// dropdown toogle
window.onclick=function(event){
    
    var toogle = event.target.dataset.toggle
    var element = document.querySelector(`#${toogle}`)

    console.log(toogle);
    console.log(element)

    if(toogle==undefined)collapseDrpdown()
    else if(element.classList.contains('drp-expand')){
        collapseDrpdown()
       // console.log('debug')
    }else{
        collapseDrpdown()
        element.classList.add('drp-expand')
    }

}

function collapseDrpdown(){
    var drpdowns = document.querySelectorAll('.drp-expand')
    //var drpdowns = document.getElementsByClassName('drp-expand')
   for(let i = 0;i < drpdowns.length; i++){
       console.log(i)
       drpdowns[i].classList.remove('drp-expand')
       drpdowns[i].classList.add('drp-exit')
       setTimeout(() => {  drpdowns[i].classList.remove('drp-exit')}, 300);
      // console.log('debug')
   }

}

//sidebar toogle 
function collapseSidebar(){
    
    body.classList.toggle('sidebar-expand')
    
}

function hamburgerOnclick(){
    collapseSidebar()
    hamburger.classList.toggle("is-active")
}

