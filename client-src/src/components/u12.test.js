import React from 'react';
import ReactDOM from 'react-dom';
import U12 from './u12';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import Enzyme, {
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

describe('Component: U12', () => {

    it('should match its empty snapshot', () => {
        const tree = renderer.create( 
            <U12 />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })

})