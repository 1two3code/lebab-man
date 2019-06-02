import { Blinky } from './Blinky';
import { Direction } from './Direction';
import { MotionState } from './Ghost';
import * as chai from 'chai';

describe('Blinky', () => {

    it('reset() works as expected', () => {

        const mockGame: any /* PacmanGame */ = {
            checkLoopedSound: () => {}
        };

        const ghost: Blinky = new Blinky(mockGame);
        ghost.reset();

        chai.assert.equal(ghost.direction, Direction.WEST);
        chai.assert.equal(ghost.motionState, MotionState.SCATTERING);
    });
});
