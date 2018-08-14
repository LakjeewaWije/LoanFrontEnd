import { LoanModule } from './loan.module';

describe('LoanModule', () => {
  let loanModule: LoanModule;

  beforeEach(() => {
    loanModule = new LoanModule();
  });

  it('should create an instance', () => {
    expect(loanModule).toBeTruthy();
  });
});
