'use client'

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes/index';

const sanityConfig = defineConfig({
  projectId: 'qqzkfqzj',
  title: 'xmingeradvertising',
  dataset: 'production',
  apiVersion: '2024-08-01',
  basePath: '/adminpage',
  schema: {
    types: schemaTypes,
  },
  plugins: [deskTool()],
});

export default sanityConfig
