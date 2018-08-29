import { MaterialModulesModule } from './material-modules.module';

describe('MaterialModulesModule', () => {
  let materialModulesModule: MaterialModulesModule;

  beforeEach(() => {
    materialModulesModule = new MaterialModulesModule();
  });

  it('should create an instance', () => {
    expect(materialModulesModule).toBeTruthy();
  });
});
