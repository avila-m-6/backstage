## API Report File for "@backstage/plugin-catalog-backend-module-gcp"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import * as container from '@google-cloud/container';
import { EntityProvider } from '@backstage/plugin-catalog-node';
import { EntityProviderConnection } from '@backstage/plugin-catalog-node';
import { LoggerService } from '@backstage/backend-plugin-api';
import { SchedulerService } from '@backstage/backend-plugin-api';

// @public
const catalogModuleGcpGkeEntityProvider: BackendFeature;
export default catalogModuleGcpGkeEntityProvider;

// @public
export class GkeEntityProvider implements EntityProvider {
  // (undocumented)
  connect(connection: EntityProviderConnection): Promise<void>;
  // (undocumented)
  static fromConfig({
    logger,
    scheduler,
    config,
  }: {
    logger: LoggerService;
    scheduler: SchedulerService;
    config: Config;
  }): GkeEntityProvider;
  // (undocumented)
  static fromConfigWithClient({
    logger,
    scheduler,
    config,
    clusterManagerClient,
  }: {
    logger: LoggerService;
    scheduler: SchedulerService;
    config: Config;
    clusterManagerClient: container.v1.ClusterManagerClient;
  }): GkeEntityProvider;
  // (undocumented)
  getProviderName(): string;
  // (undocumented)
  refresh(): Promise<void>;
}

// Warnings were encountered during analysis:
//
// src/providers/GkeEntityProvider.d.ts:17:5 - (ae-undocumented) Missing documentation for "fromConfig".
// src/providers/GkeEntityProvider.d.ts:22:5 - (ae-undocumented) Missing documentation for "fromConfigWithClient".
// src/providers/GkeEntityProvider.d.ts:28:5 - (ae-undocumented) Missing documentation for "getProviderName".
// src/providers/GkeEntityProvider.d.ts:29:5 - (ae-undocumented) Missing documentation for "connect".
// src/providers/GkeEntityProvider.d.ts:35:5 - (ae-undocumented) Missing documentation for "refresh".
```