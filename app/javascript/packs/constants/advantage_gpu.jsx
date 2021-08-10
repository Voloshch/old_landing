import gpu from 'images/landing/services/compute/gpu.png';
import access from 'images/landing/services/compute/access.png';
import framework from 'images/landing/services/compute/framework.png';
import memory from 'images/landing/services/compute/memory.png';

const gpuАdv = {
  nameList: 'gpu_advantages',
  elements: [
    {
      title: 'compute.gpu.generation.title',
      description: 'compute.gpu.generation.description',
      img: gpu,
    },
    {
      title: 'compute.gpu.support.title',
      description: 'compute.gpu.support.description',
      img: framework,
    },
    {
      title: 'compute.gpu.memory.title',
      description: 'compute.gpu.memory.description',
      img: memory,
    },
    {
      title: 'compute.gpu.access.title',
      description: 'compute.gpu.access.description',
      img: access,
    }
  ]
};

export default gpuАdv;
