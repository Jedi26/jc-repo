exports.githubApiQuery = `
query($github_login: String!) {
	user(login: $github_login) {
		  repositories(privacy: PUBLIC, first: 10) {
			 nodes {
				id
				name
				description
				url
				updatedAt
				forkCount
				homepageUrl
				openGraphImageUrl
				stargazers {
					totalCount
				}
				readme: object(expression: "master:README.md") {
					... on Blob {
						text
					}
				}
				licenseInfo {
					id
				}
				primaryLanguage {
					name
				}
				languages(first: 10) {
					nodes {
						name
					}
				}
			 }
		  }
		}
}
`