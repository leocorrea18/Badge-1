const links = {
  github: 'leocorrea18',
  youtube: 'UC4jk_dFizSuP2RQ2480-zcw',
  facebook: 'leonardo.correa.900/',
  instagram: 'carcarty'
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}
changeSocialMediaLink()
