

## [Bin Cao 曹斌](http://www.caobin.asia/) <img src="./logo.jpeg" alt="Logo" width="30" height="30">

I am **Cao Bin**, working at the interdisciplinary of **computational materials science** and **artificial intelligence**. I obtained my B.E. from [Beijing University of Chemical Technology](https://www.buct.edu.cn/main.htm), and I am currently affiliated with the [Hong Kong University of Science and Technology (Guangzhou)](https://www.hkust-gz.edu.cn/), where I conduct research under the supervision of [Prof. ZHANG Tong-Yi](https://english.casad.cas.cn/members/casm/dots/202404/t20240418_660476.html).

My current research aims to integrate **machine learning methodologies** with **materials physics**, with a particular emphasis on:

* **Crystallographic structure analysis** and simulation via diffraction-based methods
* **AI-assisted phase identification** from experimental X-ray diffraction (XRD) patterns
* **Bayesian optimization frameworks** for efficient material design and discovery
* **Generative models** for hypothetical crystal structures with target properties

I am a strong proponent of **open science**, advocating for transparency, reproducibility, and community collaboration in computational research.

---

📌 **Quick Links**

* 🔬 [Academic Introduction](https://bin-cao.github.io/caobin/)
* 🏠 [Personal Website](http://www.caobin.asia/)
* 📖 [Google Scholar Profile](https://scholar.google.com/citations?user=XXCuRdoAAAAJ&hl=zh-CN&authuser=1)

---



### 📣 WeChat Channel

<a href="https://mp.weixin.qq.com/s/4etGcIri-AXUT5GAKL0cJg" target="_blank">
  <img width="210" height="70" alt="WeChat Public Account" src="https://github.com/Bin-Cao/Bin-Cao/assets/86995074/461ad549-551f-45ad-8fe4-0ec717917a1d">
</a>

---

<!DOCTYPE html>
<html>
<head>
  <title>Bin Cao GitHub Impact</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h1>GitHub Metrics for Bin Cao</h1>
  <canvas id="starsChart" width="800" height="400"></canvas>

  <script>
    const username = 'Bin-Cao'; // GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    fetch(apiUrl)
      .then(resp => resp.json())
      .then(data => {
        const repos = data;
        const labels = repos.map(r => r.name);
        const starCounts = repos.map(r => r.stargazers_count);
        const forkCounts = repos.map(r => r.forks_count);

        const ctx = document.getElementById('starsChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Stars',
                data: starCounts,
                backgroundColor: 'rgba(54, 162, 235, 0.5)'
              },
              {
                label: 'Forks',
                data: forkCounts,
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Stars & Forks for each repo' }
            },
            scales: {
              x: { ticks: { autoSkip: true, maxTicksLimit: 20 } },
              y: { beginAtZero: true }
            }
          }
        });
      })
      .catch(err => console.error(err));
  </script>
</body>
</html>
