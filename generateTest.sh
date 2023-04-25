#! /bin/bash

file="./src/components/Stepper_GENERATED.cy.jsx"

test="
import Stepper from './Stepper';

describe('<Stepper />', () => {
    it('should show initial value 0', () => {
        cy.mount(<Stepper />);
        cy.get('[data-cy=counter]').should('have.text', '0');
    });
});
"

echo "$test" > $file

# DEBUG INFO
ls $file
cat $file

# Run the test file
npx cypress run --component --spec $file 