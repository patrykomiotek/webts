type Constructor<T = {}> = new (...args: any) => T;

// CanFly
// CanSwim
function CanFly<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fly() {
      return '🦅 Flying';
    }
  };
}

function CanSwim<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    swim() {
      return '🐠 Swimming';
    }
  };
}

class Animal {}

const Bird = CanFly(Animal);
const Fish = CanSwim(Animal);

const Duck = CanSwim(CanFly(Animal));
const duck1 = new Duck();
duck1.fly();
duck1.swim();

describe('Check if mixins works correctly', () => {
  it('should can fly', () => {
    const bird1 = new Bird();
    expect(bird1.fly()).toBe('🦅 Flying');
  });
  it('should can swim', () => {
    const fish1 = new Fish();
    expect(fish1.swim()).toBe('🐠 Swimming');
  });
  it('should can swim and fly', () => {
    const duck1 = new Duck();
    expect(duck1.fly()).toBe('🦅 Flying');
    expect(duck1.swim()).toBe('🐠 Swimming');
  });
});

// create function -> create class and extend it

// Bird
// Fish
// Duck

// test and display result on the console
