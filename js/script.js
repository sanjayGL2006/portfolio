// 1. Your Data (Update this list when you get new certificates)
const certificateData = [
  { name: "Blockchain Fundamental and Conversation Protocol", issuer: "Tim Roughgarden", category: "tech", link: "https://drive.google.com/file/d/1-0kpgEMqiR0UHkNv8oyof-2xP32aYPFZ/view?usp=sharing" },
  { name: "Advanced Python Programming", issuer: "Coursera", category: "tech", link: "https://drive.google.com/file/d/1-8vlFb8yc5f-75UT-QQfIqD4JMFGqt1h/view?usp=sharing" },
  { name: "Data Science Internship", issuer: "XYZ Company", category: "internship", link: "https://drive.google.com/file/d/1-L38L9BUDCu4VUJ5EIce_XhSV2v2ye4u/view?usp=sharing" },
  { name: "AI and Machine Learning", issuer: "Stanford University", category: "tech", link: "https://drive.google.com/file/d/107VX9Fm7p8BC5KqtAgcNzSvjush6jojn/view?usp=sharing" },
  { name: "National Science Award", issuer: "Government", category: "awards", link: "https://drive.google.com/file/d/12ESuKNWaY74SOox4TgXZhqOZ2_dpszg-/view?usp=sharing" }
];

// 2. Remove Duplicates (Logic to show only unique names)
const uniqueCerts = [...new Map(certificateData.map(item => [item.name, item])).values()];

// 3. Sort Alphabetically by Name
uniqueCerts.sort((a, b) => a.name.localeCompare(b.name));

// 4. Function to Display Certificates
function displayCerts(filter = 'all') {
  const grid = document.getElementById('cert-grid');
  grid.innerHTML = ""; // Clear current display

  uniqueCerts.forEach(cert => {
    if (filter === 'all' || cert.category === filter) {
      const card = `
        <div class=\"cert-card ${cert.category}\">
          <h3>${cert.name}</h3>
          <p>Issued by: ${cert.issuer}</p>
          <a href=\"${cert.link}\" target=\"_blank\">View Document</a>
        </div>
      `;
      grid.innerHTML += card;
    }
  });
}

// 5. Filter Trigger
function filterSelection(category) {
  displayCerts(category);
  
  // Update active button UI
  let btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
}

// Initialize on page load
window.onload = () => displayCerts('all');