
  
# Hi there, I am Bin CAO | 曹斌  💻

<p align="left">
<a href="https://github.com/Bin-Cao">
    <img src="https://readme-typing-svg.demolab.com?font=Georgia&size=18&duration=2000&pause=100&multiline=true&width=500&height=80&lines=Bin+CAO+(曹斌);Researcher+%7C+PhD+Student+%7C+FocusOn+XRDdiffraction;AI+%7C+Materials+Informatics+%7C+Machine+Learning" alt="Typing SVG" />
</a>
<br/>
 
<!DOCTYPE html>
<html>
<head>
	<title>GitHub Issue 统计</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 50px auto;
			max-width: 600px;
		}
		.stats {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 20px;
			padding: 10px;
			border-radius: 5px;
			background-color: #fff;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		}
		.stat-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 20px;
		}
		.stat-item:last-child {
			margin-right: 0;
		}
		.stat-item-value {
			font-size: 24px;
			font-weight: bold;
			margin-bottom: 5px;
			color: #22272e;
		}
		.stat-item-label {
			font-size: 16px;
			color: #888;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>GitHub Issue 统计</h1>
		<div class="stats" id="stats-container">
			<div class="stat-item">
				<div class="stat-item-value" id="open-issues"></div>
				<div class="stat-item-label">Open Issues</div>
			</div>
			<div class="stat-item">
				<div class="stat-item-value" id="closed-issues"></div>
				<div class="stat-item-label">Closed Issues</div>
			</div>
		</div>
	</div>

	<script>
		// Replace the following variables with your own values
		const username = "Bin-Cao";
		const repo = "your-repo-name";
		const openIssuesElement = document.getElementById("open-issues");
		const closedIssuesElement = document.getElementById("closed-issues");

		fetch(`https://api.github.com/repos/${username}/${repo}/issues?state=all`)
			.then(response => response.json())
			.then(data => {
				const openIssues = data.filter(issue => !issue.pull_request && issue.state === "open").length;
				const closedIssues = data.filter(issue => !issue.pull_request && issue.state === "closed").length;
				openIssuesElement.innerText = openIssues;
				closedIssuesElement.innerText = closedIssues;
			})
			.catch(error => console.error(error));
	</script>
</body>
</html>
 
  
<a href="https://github.com/Bin-Cao">
    <img src="https://github-stats-alpha.vercel.app/api?username=Bin-Cao&cc=22272e&tc=37BCF6&ic=fff&bc=0000">
</a>

 
[![](https://img.shields.io/badge/ResearchGate-Bin%20Cao-yellowgreen)](https://www.researchgate.net/profile/Bin-Cao-37)
[![](https://img.shields.io/badge/Google%20Scholar-Bin%20CAO-orange)](https://scholar.google.com.hk/citations?user=XXCuRdoAAAAJ&hl=zh-CN)
[![](https://img.shields.io/badge/Repositories-GitHub-blue)](https://github.com/Bin-Cao?tab=repositories)
[![](https://img.shields.io/badge/Open--source%20Projects-PyPI-orange)](https://pypi.org/user/CaoBin/)


<img height="170" align="left" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Bin-Cao&layout=compact">
 
   
---
**Open source package:**

[![](https://img.shields.io/badge/TCLR-GitHub-green)](https://github.com/Bin-Cao/TCLRmodel)
[![](https://img.shields.io/badge/TCGPR-GitHub-green)](https://github.com/Bin-Cao/TCGPR)
[![](https://img.shields.io/badge/Bgolearn-GitHub-green)](https://github.com/Bin-Cao/Bgolearn)
[![](https://img.shields.io/badge/TrAdaBoost-GitHub-green)](https://github.com/Bin-Cao/TrAdaboost)
[![](https://img.shields.io/badge/WPEM-GitHub-green)](https://github.com/Bin-Cao/WPEM)

🤝🤝🤝 **Please star** ⭐️ **them for promoting open source projects** 🌍 **! Thanks !**
  
  
 
---

## Skills
+ Machine Learning 
+ X-ray Diffraction Refinement 
+ Metal Oxidation

## Experience
+ 👨‍🎓 2023.9-     : Hong Kong University of Science and Technology(GZ）/ PHD student / Guangzhou, China
+ 👨‍💻 2023.3-2023.9 : Zhejiang LAB / Intern / Hangzhou, China
+ 👨‍🎓 2020.9-2023.6 : Shanghai University / Mphil / Shanghai, China
+ 👨‍🎓 2016.9-2020.6 : Beijing University of Chemical Technology / Bachelor / Beijing, China

## Languages
+ Mandarin Chinese (Native Speaker)
+ English (C1-C2 level)

## Contact

+ 📨 Email : binjacobcao@gmail.com



<a href=#><img src="contributions.svg"></a>

<p align="center"> 
  Visitor count<br>
  <img src="https://profile-counter.glitch.me/Bin-Cao/count.svg" />
</p>

<h1 align="center">
  <a href=""><img src="https://user-images.githubusercontent.com/86995074/233922132-9ba951ac-05d3-4708-be1b-a06f72ca2bd6.jpg" alt="Wechat" width="230"></a>
</h1>


