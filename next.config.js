const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n,
	publicRuntimeConfig: {
		apiURL: process.env.API_URL,
	},
	pageExtensions: ["api.ts", "page.tsx"],
	async headers() {
		return [
			{
				source: "/:path*{/}?",
				headers: [
					{
						key: "x-frame-options",
						value: "deny",
					},
					{
						key: "content-security-policy",
						value: "frame-ancestors 'none'",
					},
					{
						key: "x-content-type-options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "same-origin",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=31536000",
					},
					{
						key: "Permissions-Policy",
						value: "interest-cohort=()",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
