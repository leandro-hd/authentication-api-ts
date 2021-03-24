function pageLanding(req, res) {
  return res.render('register.html')
}

function pageLogin(req, res) {
  return res.render('login.html')
}

function pageAbout(req, res) {
  return res.render('about.html')
}

export { pageLanding, pageLogin, pageAbout }