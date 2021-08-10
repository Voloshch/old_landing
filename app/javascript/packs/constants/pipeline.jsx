const pipeline = {
  title: 'devopsservice.pipeline_stages.description',
  elements: [
    {
      name: 'devopsservice.pipeline_stages.stages.source.name',
      type: 'devopsservice.pipeline_stages.stages.source.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.build.name',
      type: 'devopsservice.pipeline_stages.stages.build.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.security.name',
      type: 'devopsservice.pipeline_stages.stages.security.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.analys.name',
      type: 'devopsservice.pipeline_stages.stages.analys.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.test.name',
      type: 'devopsservice.pipeline_stages.stages.test.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.publish.name',
      type: 'devopsservice.pipeline_stages.stages.publish.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.staging.name',
      type: 'devopsservice.pipeline_stages.stages.staging.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.productionPre.name',
      type: 'devopsservice.pipeline_stages.stages.productionPre.type'
    },
    {
      name: 'devopsservice.pipeline_stages.stages.production.name',
      type: 'devopsservice.pipeline_stages.stages.production.type'
    },
  ]
};

export default pipeline;