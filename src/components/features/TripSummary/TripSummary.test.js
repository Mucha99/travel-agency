import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const initialProps = {
    tags: [],
    link: '',
    id: '',
  };

  it('should render correct Link', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';

    const component = shallow(<TripSummary {...initialProps} link={expectedLink} id={expectedId}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct src and alt', () => {
    const expectedSrc = 'plik.jpg';
    const expectedAlt = 'name';

    const component = shallow(<TripSummary {...initialProps} image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props name, cost, days', () => {
    const expectedName = 'Trip - Spain';
    const expectedCost = '44,555';
    const expectedDays = 8;

    const component = shallow(<TripSummary {...initialProps} name={expectedName} cost={expectedCost} days={expectedDays} />);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  
  it('should render tags in spans', () => {
    const expectedTags = ['a', 'b', 'c'];
    
    const component = shallow(<TripSummary {...initialProps} tags={expectedTags}/>);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should throw error without required tags', () => {
    const component = shallow(<TripSummary {...initialProps}/>);

    expect(component.hasClass('tags')).toBe(false);
  });

});