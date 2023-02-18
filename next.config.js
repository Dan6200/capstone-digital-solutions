//cspell:disable
module.exports = {
	env: {
		SERVICE_ID:'service_qttm04n',
		TEMPLATE_ID:'template_1tjlcbi',
		MY_KEY:'YdianrNeKp4wjDitD'
	},
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {unoptimized:true}
};
