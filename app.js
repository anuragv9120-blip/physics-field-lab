/* Physics Field Lab · chapter map follows the supplied JEE Main 2025 syllabus. */
const topic = (title, explanation, application, importance, formula) => ({ title, explanation, application, importance, formula });
const CHAPTERS = [
  {
    id: 1, title: "Units & Measurements", short: "Units & Measurements", scene: "measure", simTitle: "The measurement bench", description: "Build a reliable language for physical quantities: choose units, read instruments and understand how much confidence a measurement deserves.", insight: "A measurement always has a resolution. A finer scale lets us report a more precise value, but every instrument still has uncertainty.",
    controls: [{key:"length",label:"Object length",unit:"cm",min:10,max:70,step:1,value:42},{key:"least",label:"Instrument least count",unit:"mm",min:.1,max:2,step:.1,value:.5}],
    topics: [
      topic("Physical quantities and SI units","Separate fundamental quantities from derived ones, then express each with a consistent SI unit. Unit conversions preserve the physical quantity while changing its numerical description.","SI units make measurements comparable across labs, engineering teams and countries.","A correct unit catches errors that a plausible-looking number can hide.","v = 12 m s⁻¹ · force = kg m s⁻²"),
      topic("Instruments, least count and significant figures","Read the smallest scale division, record only justified digits, and report the uncertainty implied by the instrument. Repeated measurements help distinguish random scatter from a consistent bias.","Calipers, micrometers, digital sensors and lab calibration.","Precision sets the limit on what a measurement can establish; significant figures prevent false confidence.","reading ± uncertainty"),
      topic("Errors in measurement","Absolute, relative and percentage error describe the size of uncertainty in different ways. Independent measurement errors combine when results are calculated from several quantities.","Sensor calibration, experimental tolerances and quality control.","Error analysis tells us whether two results really differ and which measurement needs improvement.","relative error = Δx / x"),
      topic("Dimensions and dimensional analysis","Represent a quantity by powers of mass, length and time. Dimensional checks can test an equation or infer the form of a relation, though they cannot determine dimensionless constants.","Checking engineering formulas, scaling physical models and estimating unknown relations.","Dimensions are a quick, powerful consistency check before substituting numbers.","[force] = M L T⁻²")
    ]
  },
  {
    id: 2, title: "Kinematics", short: "Kinematics", scene: "projectile", simTitle: "A trajectory, drawn in real time", description: "Describe motion without asking what caused it. Track position, velocity and acceleration across straight paths, projectiles and circular motion.", insight: "Horizontal velocity stays constant in ideal projectile motion while gravity changes the vertical velocity. Together they create a curved path.",
    controls: [{key:"speed",label:"Launch speed",unit:"m/s",min:8,max:38,step:1,value:24},{key:"angle",label:"Launch angle",unit:"°",min:15,max:75,step:1,value:48},{key:"gravity",label:"Gravity",unit:"m/s²",min:2,max:15,step:.5,value:9.8}],
    topics: [
      topic("Reference frames, position and displacement","A position is meaningful only relative to a chosen origin and frame. Displacement records the vector change in position, while distance records the path length.","Navigation, sports tracking and describing motion from a moving vehicle.","Choosing a useful frame simplifies the motion and keeps observations precise.","Δx = x₂ − x₁"),
      topic("Speed, velocity and acceleration","Average velocity uses total displacement over time; instantaneous velocity is the local rate of position change. Acceleration measures how quickly velocity changes, including changes in direction.","Vehicle instrumentation, motion capture and interpreting position-time or velocity-time graphs.","The distinction between speed and velocity explains why a turning object accelerates even at steady speed.","v = dx/dt · a = dv/dt"),
      topic("Uniformly accelerated motion and relative velocity","For constant acceleration, the kinematic equations connect displacement, velocity and time. Relative velocity is the difference between velocities measured in the same frame.","Estimating braking distance, meeting times, overtaking and aircraft navigation.","These methods turn a changing-motion story into a small set of solvable quantities.","v = u + at · s = ut + ½at²"),
      topic("Projectile and circular motion","Resolve a projectile's velocity into independent horizontal and vertical components. Uniform circular motion has changing velocity direction and therefore requires centripetal acceleration.","Ball sports, fountains, satellites, centrifuges and rotating machinery.","The same vector ideas explain trajectories and why circular motion needs a net inward acceleration.","R = u² sin(2θ)/g · aᶜ = v²/r")
    ]
  },
  {
    id: 3, title: "Laws of Motion", short: "Laws of Motion", scene: "newton", simTitle: "Forces on a sliding block", description: "Use Newton’s laws to connect forces to changes in motion, then test how momentum, friction and circular motion shape real systems.", insight: "Only the unbalanced force changes an object's motion. Static friction adapts up to a limit; kinetic friction acts once surfaces slide.",
    controls: [{key:"mass",label:"Block mass",unit:"kg",min:1,max:20,step:1,value:6},{key:"force",label:"Applied force",unit:"N",min:0,max:100,step:1,value:42},{key:"mu",label:"Friction coefficient",unit:"μ",min:0,max:1,step:.05,value:.35}],
    topics: [
      topic("Inertia, force and Newton’s laws","Inertia is resistance to a change in velocity. Newton's first law describes motion when net force is zero; the second relates net force to acceleration; the third describes equal and opposite interaction forces.","Seat belts, rocket propulsion, walking and force diagrams.","Free-body diagrams and a consistent system boundary make multi-force problems understandable.","ΣF = ma"),
      topic("Momentum, impulse and conservation","Momentum is mass times velocity. Impulse equals the change in momentum, so a force acting for longer can produce the same momentum change with a smaller peak force. Isolated systems conserve total momentum.","Airbags, sports impacts, recoil and collision analysis.","Momentum conservation solves interactions even when the detailed forces during impact are unknown.","J = FΔt = Δp"),
      topic("Equilibrium and friction","Concurrent forces balance in static equilibrium. Static friction opposes impending slip up to a maximum; kinetic friction acts during sliding, while rolling resistance is usually smaller.","Walking, vehicle tyres, brakes, conveyor belts and objects at rest on slopes.","Friction is both a useful source of grip and a cause of energy loss and wear.","fₛ ≤ μₛN · fₖ = μₖN"),
      topic("Uniform circular motion and banking","A curved path requires inward centripetal force, supplied by tension, friction, gravity or a normal force. Banking helps a vehicle turn without relying only on tyre friction.","Road curves, loops, rotating rides and orbital motion.","Identifying the source of centripetal force prevents treating it as an extra force.","Fᶜ = mv²/r")
    ]
  },
  {
    id: 4, title: "Work, Energy & Power", short: "Work, Energy & Power", scene: "energy", simTitle: "The energy track", description: "Follow energy as it moves between motion, height and deformation. Use work to account for transfers and power to compare how quickly they happen.", insight: "On a frictionless track, gravitational potential energy becomes kinetic energy while total mechanical energy stays constant.",
    controls: [{key:"height",label:"Starting height",unit:"m",min:2,max:30,step:1,value:18},{key:"mass",label:"Rider mass",unit:"kg",min:20,max:100,step:5,value:60},{key:"friction",label:"Energy dissipated",unit:"%",min:0,max:60,step:2,value:8}],
    topics: [
      topic("Work by constant and variable forces","Work transfers energy when a force acts through displacement. For a varying force, the area under a force-displacement graph gives the work.","Lifting, stretching springs and analysing force sensors.","Work keeps track of how forces change a system's energy.","W = F s cosθ"),
      topic("Kinetic energy and the work-energy theorem","Kinetic energy depends on speed. The net work done on a body equals its change in kinetic energy, independent of the path used to calculate that work.","Braking distances, machinery and motion under changing forces.","This theorem often solves a motion problem without finding acceleration or time.","Wₙₑₜ = ΔK"),
      topic("Potential energy and conservation of mechanical energy","A conservative interaction can be described by potential energy. Spring and gravitational potential energy can transform to kinetic energy; non-conservative forces transfer some mechanical energy into thermal or other forms.","Roller coasters, pendulums, springs, hydroelectric storage and launch systems.","Energy accounting provides a compact description of motion from one position to another.","K + U = constant"),
      topic("Power, vertical circles and collisions","Power is the rate of energy transfer. Vertical-circle motion depends on speed and the inward force at each point; collisions are elastic when kinetic energy is conserved and inelastic otherwise.","Motors, impact protection, amusement rides and sports.","These ideas connect energy change to time, contact and safe operating limits.","P = dW/dt · K₁ + U₁ = K₂ + U₂")
    ]
  },
  {
    id: 5, title: "Rotational Motion", short: "Rotational Motion", scene: "rotation", simTitle: "Torque turns the wheel", description: "Extend linear mechanics to objects that rotate. Compare torque with force, angular momentum with momentum, and moment of inertia with mass.", insight: "A force applied farther from the axis produces more torque. How strongly the object responds also depends on how its mass is distributed.",
    controls: [{key:"torque",label:"Applied torque",unit:"N·m",min:1,max:40,step:1,value:18},{key:"radius",label:"Wheel radius",unit:"m",min:.2,max:1.8,step:.1,value:1.1},{key:"mass",label:"Wheel mass",unit:"kg",min:2,max:30,step:1,value:12}],
    topics: [
      topic("Centre of mass and rigid bodies","The centre of mass tracks the average position of a system's mass and moves as if external forces acted there. A rigid body keeps fixed distances between its parts.","Balancing, sports technique, vehicle stability and analysing multi-object systems.","Finding the centre of mass can reduce a complex body to a simpler translational model.","rCM = Σmᵢrᵢ / Σmᵢ"),
      topic("Torque and angular momentum","Torque is the rotational effect of a force about an axis. Angular momentum depends on rotational inertia and angular velocity; in an isolated system it is conserved.","Door handles, spanners, gyroscopes, divers and planetary motion.","The chosen axis and lever arm determine how strongly a force changes rotation.","τ = r × F · L = Iω"),
      topic("Moment of inertia and axis theorems","Moment of inertia weights each mass element by its squared distance from an axis. The parallel and perpendicular axes theorems relate it to simpler reference axes.","Flywheels, wheels, rotating platforms and structural analysis.","Mass distribution controls rotational response, even when total mass stays the same.","I = Σmr² · τ = Iα"),
      topic("Rotational dynamics and equilibrium","Rigid-body rotation follows equations analogous to linear motion. Equilibrium requires both zero net force and zero net torque; rolling combines translation and rotation.","Levers, cranes, gears, wheels and balance structures.","A body can have zero net force yet still rotate if torque is unbalanced.","ΣF = ma · Στ = Iα")
    ]
  },
  {
    id: 6, title: "Gravitation", short: "Gravitation", scene: "gravity", simTitle: "A satellite around a planet", description: "Explore the attractive force shared by all masses, its connection to orbital motion, and the energy needed to reach or leave a gravitational field.", insight: "A satellite remains in orbit because gravity continuously bends its forward motion. A higher orbit has a longer period and a lower orbital speed.",
    controls: [{key:"planet",label:"Planet mass",unit:"Earths",min:.2,max:3,step:.1,value:1},{key:"orbit",label:"Orbit radius",unit:"Rₑ",min:1.2,max:5,step:.1,value:2.2},{key:"satellite",label:"Satellite mass",unit:"kg",min:100,max:2000,step:100,value:500}],
    topics: [
      topic("Universal gravitation and acceleration due to gravity","Every pair of masses attracts with a force proportional to their masses and inversely proportional to separation squared. Earth's effective g changes with altitude and depth.","Planetary motion, tides, geodesy and weighing objects at different heights.","Gravity links everyday falling objects to the motion of planets and satellites.","F = Gm₁m₂/r²"),
      topic("Kepler’s laws and gravitational potential","Kepler's laws describe planetary orbits. Gravitational potential energy and potential describe how energy changes with position in a gravitational field.","Planet tracking, mission planning and interpreting orbital periods.","Potential makes it possible to compare the energy of different orbital states.","U = −GMm/r · g = GM/r²"),
      topic("Escape velocity and satellites","Escape speed is the minimum launch speed needed to reach arbitrarily large distance without further propulsion. Orbital speed, period and energy follow from gravitational force providing centripetal force.","Satellite communications, navigation, Earth observation and spaceflight.","These results explain why different orbits offer different coverage, speed and energy.","vₒ = √(GM/r) · vₑ = √(2GM/R)")
    ]
  },
  {
    id: 7, title: "Properties of Solids & Liquids", short: "Solids & Liquids", scene: "fluids", simTitle: "Inside a fluid column", description: "Study how materials deform and fluids flow, then connect temperature, phase change and heat transfer to observable behaviour.", insight: "Pressure grows with depth because more fluid rests above each point. The same pressure acts in every direction at that depth.",
    controls: [{key:"depth",label:"Water depth",unit:"m",min:.2,max:8,step:.1,value:3.5},{key:"density",label:"Fluid density",unit:"kg/m³",min:500,max:1500,step:25,value:1000},{key:"gravity",label:"Gravity",unit:"m/s²",min:2,max:15,step:.5,value:9.8}],
    topics: [
      topic("Elastic behaviour and moduli","Stress measures force per area; strain measures relative deformation. Hooke's law relates them in the elastic range, with Young's, bulk and shear moduli describing different deformations.","Designing wires, springs, structural members and pressure vessels.","Material response determines safe loads, flexibility and permanent failure limits.","stress = Y × strain"),
      topic("Fluid pressure and Pascal’s law","Pressure in a static fluid rises with depth. Pascal's law says an applied pressure change is transmitted through a confined fluid.","Hydraulic lifts, brakes, dams and diving equipment.","Pressure analysis predicts forces on submerged surfaces and helps size hydraulic systems.","p = p₀ + ρgh"),
      topic("Viscosity, flow and Bernoulli’s principle","Viscosity resists relative motion between fluid layers. Streamline flow can be described using continuity and Bernoulli's principle; turbulent flow becomes irregular beyond a critical condition.","Pipes, blood flow, aircraft wings, atomisers and drag.","Flow principles explain how speed, area and pressure change together.","A₁v₁ = A₂v₂ · p + ½ρv² + ρgh = constant"),
      topic("Surface tension and capillarity","Molecular attraction gives a liquid surface an energy cost. Curved interfaces create excess pressure, while capillary rise depends on surface tension, contact angle and tube radius.","Detergents, droplets, bubbles, ink pens and water movement in plants.","Small-scale effects can dominate when surface area is large compared with volume.","h = 2T cosθ/(ρgr)"),
      topic("Thermal expansion, calorimetry and phase change","Temperature describes thermal state; heat is energy transferred due to temperature difference. Calorimetry balances energy, including latent heat during a phase change.","Thermometers, cooking, material expansion gaps and thermal storage.","Thermal energy budgets explain temperature change even when there is no visible motion.","Q = mcΔT · Q = mL"),
      topic("Conduction, convection and radiation","Heat spreads by particle interactions, bulk fluid motion or electromagnetic radiation. The dominant pathway depends on the material and surroundings.","Insulation, building design, climate systems and solar heating.","Choosing the right heat-transfer model supports energy-efficient design.","conduction: Q/t ∝ ΔT")
    ]
  },
  {
    id: 8, title: "Thermodynamics", short: "Thermodynamics", scene: "thermo", simTitle: "A gas traces a P–V path", description: "Treat heat, work and internal energy as connected parts of one energy account. Compare processes that exchange heat and those that constrain it.", insight: "The area under a pressure–volume curve is work done by the gas. For an adiabatic change, no heat enters or leaves the gas.",
    controls: [{key:"volume",label:"Volume change",unit:"%",min:5,max:70,step:1,value:35},{key:"temperature",label:"Starting temperature",unit:"K",min:220,max:500,step:10,value:300},{key:"gamma",label:"Heat capacity ratio",unit:"γ",min:1.1,max:1.67,step:.01,value:1.4}],
    topics: [
      topic("Thermal equilibrium and the zeroth law","If two systems are each in thermal equilibrium with a third, they are in equilibrium with each other. This transitive property gives temperature its operational meaning.","Thermometers, environmental sensing and thermal control.","Temperature comparisons only make sense after the system reaches equilibrium.","A = C and B = C ⇒ A = B"),
      topic("Heat, work and internal energy","The first law relates a system's internal-energy change to energy transferred as heat and work. Sign conventions matter: this model uses ΔU = Q − W when W is work done by the gas.","Heat engines, refrigerators, engines and insulated containers.","Conservation of energy is the accounting rule behind every thermodynamic cycle.","ΔU = Q − W"),
      topic("Isothermal and adiabatic processes","In an isothermal ideal-gas process temperature stays fixed; in an adiabatic process heat transfer is zero. Their pressure-volume paths differ because their constraints differ.","Compressors, expansion stages and gas-cylinder design.","Process assumptions determine how pressure, volume and temperature can change together.","isothermal: PV = constant · adiabatic: PVᵞ = constant"),
      topic("Second law and reversible processes","The second law identifies a preferred direction for natural processes through entropy. Reversible processes are ideal limits; real processes generate entropy.","Power generation, refrigeration and efficiency limits.","Energy is conserved, but its usefulness for doing work can decrease.","ΔS(universe) ≥ 0")
    ]
  },
  {
    id: 9, title: "Kinetic Theory of Gases", short: "Kinetic Theory", scene: "gas", simTitle: "Molecules in a warm container", description: "Connect microscopic molecular motion to macroscopic pressure and temperature, and see how molecular speed responds to thermal energy.", insight: "Heating a gas raises the average kinetic energy of its molecules. In a fixed container that means faster impacts and greater pressure.",
    controls: [{key:"temperature",label:"Temperature",unit:"K",min:120,max:900,step:10,value:320},{key:"moles",label:"Amount of gas",unit:"mol",min:.2,max:2,step:.1,value:1},{key:"volume",label:"Container volume",unit:"L",min:5,max:40,step:1,value:18}],
    topics: [
      topic("Ideal gas equation and compression work","An ideal gas links pressure, volume, amount and absolute temperature. Work is transferred when a gas expands or is compressed against an external pressure.","Pumps, engines, weather balloons and gas storage.","The equation gives a practical bridge between measurable gas properties.","PV = nRT"),
      topic("Molecular assumptions and gas pressure","Kinetic theory models gas particles as moving randomly with negligible intermolecular forces except during collisions. Pressure comes from momentum transferred to container walls.","Explaining pressure, diffusion and gas behaviour in a sealed vessel.","A microscopic model explains why bulk pressure changes with speed and density.","p = ⅓ρc²ᵣₘₛ"),
      topic("Temperature, RMS speed and degrees of freedom","Absolute temperature is proportional to average translational kinetic energy. Degrees of freedom and equipartition predict how energy is shared among molecular motions.","Gas thermometry, sound speed and specific heat measurements.","The model predicts how quickly molecules move and how much energy a gas stores.","½m⟨v²⟩ = ³⁄₂kT"),
      topic("Equipartition, mean free path and Avogadro’s number","Equipartition assigns thermal energy to each active quadratic degree of freedom. Mean free path estimates the distance between molecular collisions; Avogadro's number converts particle counts to moles.","Diffusion, vacuum technology and estimating microscopic scales.","These concepts connect laboratory-scale amounts to the enormous number of molecules in a sample.","λₘfp ≈ 1/(√2πd²n)")
    ]
  },
  {
    id: 10, title: "Oscillations & Waves", short: "Oscillations & Waves", scene: "wave", simTitle: "A wave carries a pattern", description: "Watch periodic motion build into a travelling wave. Explore how amplitude, frequency and wavelength describe oscillations and wave behaviour.", insight: "The medium oscillates locally while the wave pattern travels. Increasing frequency at fixed wave speed shortens the wavelength.",
    controls: [{key:"amplitude",label:"Amplitude",unit:"cm",min:5,max:75,step:1,value:42},{key:"frequency",label:"Frequency",unit:"Hz",min:.5,max:5,step:.1,value:2.2},{key:"length",label:"String length",unit:"m",min:.5,max:4,step:.1,value:2}],
    topics: [
      topic("Periodic motion and simple harmonic motion","Periodic motion repeats after a fixed time. In simple harmonic motion, restoring acceleration is proportional to displacement and points toward equilibrium.","Springs, pendulums, vibration sensors and timing devices.","SHM is a useful approximation for small oscillations around stable equilibrium.","a = −ω²x"),
      topic("Phase, springs and energy in SHM","Phase identifies where an oscillator is in its cycle. Spring force stores elastic potential energy, which exchanges with kinetic energy during motion.","Suspension systems, musical strings and resonators.","Phase explains how position and velocity vary together; energy shows why amplitude stays bounded.","T = 2π√(m/k)"),
      topic("Simple pendulum","For small angles, a pendulum's period depends on its length and local gravitational acceleration, not on bob mass.","Pendulum clocks and measuring g in a lab.","It demonstrates periodic motion and provides a simple experimental measurement of gravity.","T = 2π√(L/g)"),
      topic("Wave motion, superposition and reflection","A travelling wave carries a disturbance through space. Longitudinal and transverse waves differ in oscillation direction; superposition adds overlapping displacements.","Sound, seismic waves, communication signals and ropes.","Wave speed, frequency and wavelength are separate quantities linked by propagation.","v = fλ"),
      topic("Standing waves, harmonics and beats","Reflected waves can interfere to form nodes and antinodes. Strings and organ pipes support specific harmonics; nearby frequencies produce beats.","Musical instruments, room acoustics and tuning.","Boundary conditions select allowed frequencies, shaping the sound and vibration we observe.","fₙ = nv/(2L) · fbeat = |f₁−f₂|")
    ]
  },
  {
    id: 11, title: "Electrostatics", short: "Electrostatics", scene: "electro", simTitle: "Map the electric field", description: "Place charges in space and map the invisible electric field and potential they create. Add a dipole to see how geometry changes the pattern.", insight: "Field arrows point in the direction a positive test charge would move. Potential describes energy per unit charge and is a scalar.",
    controls: [{key:"charge",label:"Source charge",unit:"μC",min:.5,max:8,step:.1,value:4},{key:"separation",label:"Charge spacing",unit:"cm",min:4,max:18,step:.5,value:10},{key:"test",label:"Test charge",unit:"nC",min:1,max:20,step:1,value:8}],
    topics: [
      topic("Charge, Coulomb’s law and superposition","Charge is conserved and quantised. Coulomb's law gives the force between point charges; the net force from many charges is the vector sum of pairwise forces.","Electrostatic precipitators, photocopiers and charged-particle instruments.","Superposition lets a complex arrangement be built from simple interactions.","F = kq₁q₂/r²"),
      topic("Electric field, dipoles and torque","Electric field is force per unit positive test charge. A dipole has separated positive and negative charges; in a uniform field it experiences torque that tends to align it.","Molecular polarity, antennae and dielectric alignment.","The field gives a local description of how a charge would respond anywhere in space.","E = F/q · τ = p × E"),
      topic("Electric flux and Gauss’s law","Electric flux measures how much field crosses a surface. Gauss's law is especially useful when the charge distribution has spherical, cylindrical or planar symmetry.","Calculating fields of idealised wires, sheets and spherical shells.","Symmetry can reduce a difficult field calculation to a simple relation.","∮E·dA = Qinside/ε₀"),
      topic("Potential, equipotentials and electrostatic energy","Potential is electric potential energy per unit charge. Equipotential surfaces require no work to move a charge along them; potential differences drive charge motion.","Circuit design, high-voltage insulation and mapping charge distributions.","Potential provides a scalar energy view that often simplifies field problems.","V = U/q · ΔU = qΔV"),
      topic("Conductors, dielectrics and capacitance","Free charges in a conductor rearrange until the interior electrostatic field vanishes. A dielectric polarises in an applied field; a capacitor stores separated charge and energy.","Touchscreens, camera flashes, filters and power supplies.","Capacitance explains how geometry and materials control stored charge and energy.","C = Q/V · U = ½CV²")
    ]
  },
  {
    id: 12, title: "Current Electricity", short: "Current Electricity", scene: "circuit", simTitle: "Current through a circuit", description: "Follow charge through a circuit, translate voltage and resistance into current, and see how networks and cells affect real measurements.", insight: "For a fixed voltage, increasing resistance lowers current. Series components share current; parallel branches share the voltage.",
    controls: [{key:"voltage",label:"Cell voltage",unit:"V",min:1,max:24,step:.5,value:9},{key:"resistance",label:"Resistance",unit:"Ω",min:2,max:60,step:1,value:18},{key:"internal",label:"Internal resistance",unit:"Ω",min:0,max:8,step:.2,value:1}],
    topics: [
      topic("Current, drift velocity and Ohm’s law","Current is charge crossing a section per unit time. In a conductor, an electric field produces a small average drift velocity among much faster random electron motion.","Wiring, sensors, circuit boards and electrical measurements.","The microscopic picture explains why material properties and geometry affect current.","I = nqAvᵈ · V = IR"),
      topic("Resistance, resistivity and electrical power","Resistance depends on material and geometry; resistivity is an intrinsic material property. Electrical power is the rate at which electrical energy is transferred.","Heaters, transmission lines, circuit protection and device efficiency.","Power calculations reveal heating and energy use before a component is damaged.","R = ρL/A · P = VI"),
      topic("Networks and temperature dependence","Series and parallel combinations reduce to equivalent resistance. Resistance can change with temperature because carrier scattering and material structure change.","Household wiring, sensor circuits and thermal protection.","Equivalent-circuit methods simplify networks and predict how a component behaves as it warms.","series: Rₑq = ΣR · parallel: 1/Rₑq = Σ1/R"),
      topic("Cells, emf and internal resistance","A cell supplies energy per unit charge (emf); internal resistance causes terminal voltage to fall under load. Cells can be combined in series or parallel.","Batteries, portable electronics and power backup.","The model distinguishes the voltage printed on a cell from the voltage available in a working circuit.","Vterminal = ε − Ir"),
      topic("Kirchhoff’s laws, Wheatstone and metre bridge","Kirchhoff's junction rule follows charge conservation; the loop rule follows energy conservation. Bridge circuits compare unknown resistances by balancing potential differences.","Resistance measurement, strain gauges and instrument circuits.","Conservation laws handle networks where a single series-parallel reduction is not enough.","ΣIin = ΣIout · ΣΔV = 0")
    ]
  },
  {
    id: 13, title: "Magnetic Effects of Current & Magnetism", short: "Magnetism", scene: "magnet", simTitle: "Current draws a magnetic field", description: "See how electric current creates magnetic fields and how magnetic forces act on charges, conductors, loops and magnetic materials.", insight: "A current in a straight wire creates circular magnetic field lines. Reversing the current reverses the direction of the field.",
    controls: [{key:"current",label:"Wire current",unit:"A",min:.5,max:12,step:.5,value:6},{key:"distance",label:"Distance from wire",unit:"cm",min:1,max:14,step:.5,value:5},{key:"charge",label:"Particle speed",unit:"10⁵ m/s",min:1,max:10,step:.5,value:4}],
    topics: [
      topic("Biot–Savart law and Ampere’s law","The Biot–Savart law sums the magnetic contribution of current elements. Ampere's law is efficient for highly symmetric fields such as long straight wires and solenoids.","Electromagnets, inductors, motors and magnetic sensors.","Together the laws connect current geometry to the field it produces.","Bwire = μ₀I/(2πr)"),
      topic("Magnetic forces and the definition of ampere","A moving charge feels a magnetic force perpendicular to both its velocity and the field. A current-carrying conductor also feels a force; parallel currents interact.","Motors, mass spectrometers and charged-particle beams.","The direction matters: magnetic forces can redirect motion without changing a particle's speed.","F = qv × B · F = BIL sinθ"),
      topic("Current loops, torque and galvanometers","A current loop behaves like a magnetic dipole and experiences torque in a uniform magnetic field. A moving-coil galvanometer uses this torque to measure small currents.","Analogue meters, loudspeakers and motor coils.","The torque-current relationship enables electrical measurement and mechanical rotation.","τ = NIAB sinθ"),
      topic("Bar magnets, magnetic dipoles and materials","A bar magnet has a dipole field similar to a solenoid. Dia-, para- and ferromagnetic materials respond differently to a field; temperature can alter magnetic order.","Compasses, magnetic storage, transformers and material selection.","Microscopic magnetic response determines whether a material shields, weakly attracts or strongly retains magnetism.","m = NIA · τ = m × B")
    ]
  },
  {
    id: 14, title: "Electromagnetic Induction & Alternating Currents", short: "Induction & AC", scene: "induction", simTitle: "A changing field makes current", description: "Move a magnet through a coil and observe induced emf. Then connect changing magnetic flux to inductance, AC circuits and electrical power.", insight: "Induced emf depends on how quickly magnetic flux changes. Lenz's law fixes its direction: the induced effect opposes the change that produced it.",
    controls: [{key:"turns",label:"Coil turns",unit:"N",min:20,max:300,step:10,value:140},{key:"flux",label:"Peak magnetic flux",unit:"mWb",min:2,max:30,step:1,value:15},{key:"frequency",label:"AC frequency",unit:"Hz",min:5,max:100,step:1,value:50}],
    topics: [
      topic("Faraday’s law, Lenz’s law and eddy currents","Changing magnetic flux induces emf. Lenz's law gives the direction, while eddy currents circulate inside conducting materials and can oppose motion.","Generators, induction cooktops, magnetic braking and metal detectors.","Induction converts mechanical changes in magnetic fields into electrical effects.","ε = −N dΦB/dt"),
      topic("Self and mutual inductance","A changing current can induce emf in the same coil or in a neighbouring one. Inductance measures how strongly magnetic flux links with current.","Transformers, ignition coils, filters and power converters.","Inductance describes temporary energy storage in a magnetic field.","εL = −L dI/dt"),
      topic("Alternating current and RMS values","AC reverses direction periodically. RMS voltage and current give the equivalent heating effect of a steady DC value.","Household electricity, power grids and AC instruments.","RMS values let us compare alternating and direct currents by their useful effect.","Vrms = V₀/√2"),
      topic("Reactance, impedance, resonance and power","Inductors and capacitors oppose AC differently at different frequencies. An LCR circuit can resonate; phase differences can reduce average power transfer.","Radio tuning, filters, motors and power-factor correction.","Frequency response determines which signals pass through an electrical system.","Z = √(R² + (XL−XC)²)"),
      topic("AC generators and transformers","A rotating coil generates alternating emf. A transformer changes AC voltage through mutual induction and trades voltage for current according to turns ratio.","Power stations, grid transmission and chargers.","Transformers make long-distance power distribution efficient and usable at different voltages.","Vs/Vp = Ns/Np")
    ]
  },
  {
    id: 15, title: "Electromagnetic Waves", short: "EM Waves", scene: "emwave", simTitle: "One spectrum, many wavelengths", description: "Explore electromagnetic waves as linked electric and magnetic oscillations, and compare the spectrum from radio signals to gamma rays.", insight: "All electromagnetic waves travel at the same speed in vacuum. Their wavelength and frequency differ, which changes how they interact with matter.",
    controls: [{key:"frequency",label:"Frequency",unit:"THz",min:.01,max:900,step:1,value:450},{key:"amplitude",label:"Field amplitude",unit:"relative",min:10,max:100,step:1,value:60}],
    topics: [
      topic("Displacement current and electromagnetic waves","A changing electric field contributes to magnetic field formation, completing the electromagnetic description. Oscillating electric and magnetic fields propagate as a wave.","Radio antennas, light sources and microwave systems.","This connection explains how electromagnetic waves can travel through empty space.","c = 1/√(μ₀ε₀)"),
      topic("Transverse nature and wave characteristics","Electric and magnetic fields oscillate perpendicular to one another and to the direction of propagation. Wavelength and frequency are linked by wave speed.","Polarisation, optical communication and remote sensing.","The transverse structure explains polarisation and how the wave carries energy.","c = fλ"),
      topic("Electromagnetic spectrum and applications","The spectrum spans radio, microwave, infrared, visible, ultraviolet, X-ray and gamma radiation. Different bands have different photon energies and interactions.","Broadcasting, Wi-Fi, thermal imaging, medicine and astronomy.","Choosing the right band enables communication, sensing, diagnosis and observation.","E = hf")
    ]
  },
  {
    id: 16, title: "Optics", short: "Optics", scene: "optics", simTitle: "Trace the light through a lens", description: "Follow rays through mirrors, lenses and prisms, then compare ray optics with interference, diffraction and polarisation.", insight: "A converging lens bends parallel rays toward its focal point. The image position changes when you move the object relative to the focal length.",
    controls: [{key:"focal",label:"Focal length",unit:"cm",min:8,max:40,step:1,value:20},{key:"object",label:"Object distance",unit:"cm",min:24,max:100,step:1,value:54},{key:"wavelength",label:"Wavelength",unit:"nm",min:400,max:700,step:10,value:550}],
    topics: [
      topic("Reflection, mirrors and refraction","Reflection obeys equal angles; refraction changes ray direction when light speed changes between media. Spherical mirrors and surfaces form images described by paraxial formulas.","Periscopes, camera optics, road mirrors and fibre optics.","Ray diagrams translate object placement into image location, size and orientation.","mirror: 1/f = 1/v + 1/u"),
      topic("Thin lenses, lens maker formula and prisms","A thin lens converges or diverges rays; its power depends on focal length. The lens maker formula links shape and refractive index. A prism disperses light by wavelength.","Eyeglasses, cameras, microscopes and spectroscopy.","Optical design depends on how curved surfaces bend different colours of light.","P = 1/f · lens: 1/f = 1/v − 1/u"),
      topic("Microscopes and astronomical telescopes","Optical instruments combine lenses or mirrors to create a magnified virtual image. Their magnifying power depends on focal lengths and viewing arrangement.","Microscopes, telescopes and scientific imaging.","Instrument design extends human vision from tiny cells to distant celestial objects.","magnifying power ≈ fobjective/feyepiece"),
      topic("Wavefronts and Huygens’ principle","Every point on a wavefront acts as a source of secondary wavelets; their envelope advances the wavefront. This construction explains reflection and refraction.","Wave propagation, optical interfaces and diffraction reasoning.","Wavefront geometry gives a bridge between ray laws and wave behaviour.","n₁ sin i = n₂ sin r"),
      topic("Interference, diffraction and polarisation","Coherent waves interfere to create fringes. Diffraction spreads a wave around an aperture; polarisation selects transverse vibration orientation.","Interferometers, anti-glare lenses, resolution limits and material testing.","These effects reveal the wave nature of light and limit the detail optical instruments can resolve.","fringe width β = λD/d"),
      topic("Total internal reflection","At an interface from denser to rarer medium, incidence beyond a critical angle reflects the ray completely back inside.","Optical fibres, prisms and endoscopes.","Guiding light by reflection allows signals to travel long distances with low loss.","sin c = n₂/n₁")
    ]
  },
  {
    id: 17, title: "Dual Nature of Matter & Radiation", short: "Dual Nature", scene: "photoelectric", simTitle: "Light releases electrons", description: "Change the frequency and intensity of incoming light to distinguish photon energy from photon count in the photoelectric effect.", insight: "Below the threshold frequency, brighter light still cannot release electrons. Above threshold, frequency controls the maximum electron energy.",
    controls: [{key:"frequency",label:"Light frequency",unit:"10¹⁴ Hz",min:3,max:12,step:.1,value:8},{key:"intensity",label:"Light intensity",unit:"%",min:10,max:100,step:1,value:65},{key:"work",label:"Work function",unit:"eV",min:1,max:5,step:.1,value:2.2}],
    topics: [
      topic("Wave-particle duality of radiation","Light propagates with wave behaviour and exchanges energy in discrete photons. The photoelectric effect supports a particle description of energy transfer.","Solar cells, photodetectors and light sensors.","One model cannot explain every observation; dual descriptions reveal which properties matter.","Ephoton = hf"),
      topic("Photoelectric effect and Einstein’s equation","Electrons are emitted when photon energy exceeds the material's work function. Increasing intensity changes the number of emitted electrons, while frequency changes their maximum kinetic energy.","Automatic doors, light meters and image sensors.","The threshold and energy balance provided evidence for quantised light.","Kmax = hf − φ"),
      topic("Matter waves and de Broglie relation","Particles with momentum have an associated wavelength. The wavelength becomes measurable for electrons and other microscopic particles.","Electron diffraction, electron microscopes and quantum experiments.","Matter-wave behaviour is essential for understanding atoms and nanoscale devices.","λ = h/p")
    ]
  },
  {
    id: 18, title: "Atoms & Nuclei", short: "Atoms & Nuclei", scene: "atom", simTitle: "An atom changes energy levels", description: "Compare atomic energy levels with nuclear binding energy. See how transitions emit photons and how mass differences reveal nuclear energy.", insight: "An electron emits a photon when it moves to a lower energy level. The photon's energy equals the gap between the levels.",
    controls: [{key:"level",label:"Upper energy level",unit:"n",min:2,max:7,step:1,value:4},{key:"mass",label:"Nucleons",unit:"A",min:2,max:240,step:2,value:56},{key:"transition",label:"Transition",unit:"levels",min:1,max:4,step:1,value:2}],
    topics: [
      topic("Scattering experiments and atomic models","Alpha-particle scattering revealed a small, dense nucleus. The Bohr model introduces quantised angular momentum and discrete hydrogen energy levels.","Spectroscopy and understanding the structure of atoms.","Experiments determine which features a scientific model must explain.","En = −13.6 eV/n²"),
      topic("Energy levels and hydrogen spectrum","Electrons occupy allowed energy levels; transitions between them emit or absorb photons of specific energies, creating spectral lines.","Astronomical composition analysis and discharge lamps.","Discrete spectra show that atomic energy is quantised.","ΔE = hf"),
      topic("Nuclear size, mass defect and binding energy","Nuclei contain protons and neutrons. Their measured mass is less than the sum of separate nucleon masses; the difference corresponds to binding energy.","Nuclear stability, medical isotopes and energy calculations.","Binding energy explains why some nuclei are more stable than others.","Ebind = Δmc²"),
      topic("Fission, fusion and binding energy per nucleon","Binding energy per nucleon varies with mass number. Heavy nuclei may release energy by splitting; light nuclei can release energy by fusion.","Nuclear power, stellar energy and radiotherapy isotopes.","The curve of binding energy explains the energy source of stars and reactors.","Q = (minitial − mfinal)c²")
    ]
  },
  {
    id: 19, title: "Electronic Devices", short: "Electronic Devices", scene: "diode", simTitle: "A diode shapes the signal", description: "Apply a changing voltage to a semiconductor diode and see why it conducts mainly in one direction, enabling rectification and control.", insight: "A forward-biased diode conducts after its characteristic turn-on region. A reverse-biased Zener diode can regulate voltage after breakdown.",
    controls: [{key:"voltage",label:"Input peak voltage",unit:"V",min:1,max:15,step:.5,value:8},{key:"frequency",label:"Input frequency",unit:"Hz",min:1,max:10,step:.5,value:3},{key:"threshold",label:"Diode threshold",unit:"V",min:.2,max:1.2,step:.05,value:.65}],
    topics: [
      topic("Semiconductors and p–n junctions","Doping changes the number and type of charge carriers. A p–n junction creates a depletion region that responds differently to forward and reverse bias.","Sensors, rectifiers, logic and integrated circuits.","Controlling carrier flow is the foundation of modern electronics.","I ≈ Iₛ(eᵛ/ⁿⱽᵀ − 1)"),
      topic("Diodes, LEDs, photodiodes and solar cells","A diode conducts mainly one way. LEDs emit light under forward bias; photodiodes respond to incident light; solar cells convert light into electrical energy.","Lighting, remotes, camera sensors and solar power.","One junction structure can emit, detect or convert energy depending on how it is used.","forward bias → current"),
      topic("Rectifiers and Zener voltage regulation","A rectifier converts AC into a one-directional output. A Zener diode uses reverse breakdown to hold a nearly constant voltage across a load.","Power adapters, reference voltages and supply protection.","These circuits turn a varying input into a more usable DC supply.","Vout ≈ VZ"),
      topic("Logic gates","Logic gates map binary inputs to outputs using Boolean rules. NAND and NOR are universal gates from which other logic functions can be built.","Computers, digital controllers and communication systems.","The gate model connects semiconductor devices to information processing.","AND: A·B · OR: A+B · NOT: Ā")
    ]
  },
  {
    id: 20, title: "Experimental Skills", short: "Experimental Skills", scene: "pendulum", simTitle: "The simple pendulum lab", description: "Turn an experiment into a measurement: identify variables, use instruments, plot data and judge whether the result supports a physical model.", insight: "For small release angles, the period depends on pendulum length and g. Repeating timings over many swings reduces reaction-time error.",
    controls: [{key:"length",label:"Pendulum length",unit:"m",min:.2,max:2,step:.05,value:1},{key:"angle",label:"Release angle",unit:"°",min:3,max:25,step:1,value:12},{key:"swings",label:"Timed swings",unit:"N",min:1,max:30,step:1,value:10}],
    topics: [
      topic("Measuring tools: Vernier calipers and screw gauge","Read a main scale and a vernier or circular scale together, account for zero error and choose the correct measurement orientation. These tools measure diameters, depths and thin thicknesses.","Precision measurement of vessels, wires, sheets and small components.","Instrument skill controls uncertainty in every later calculation.","measurement = main scale + coincident division"),
      topic("Pendulum, moments and material properties","Time oscillations over repeated swings; use moments to balance a metre scale; measure extension to estimate Young's modulus.","Timing, centre-of-mass measurement and mechanical testing.","These experiments connect equations to repeatable procedures and measurable quantities.","T = 2π√(L/g)"),
      topic("Fluids, surface tension and calorimetry","Use capillary rise, terminal velocity or mixtures to infer surface tension, viscosity or specific heat. Record temperature and dimensions with appropriate precision.","Material identification, liquid testing and thermal measurement.","A controlled method isolates one material property from several competing effects.","η from terminal speed · Qlost = Qgained"),
      topic("Sound, resonance and wave measurements","Use a resonance tube to estimate the speed of sound, and distinguish resonant lengths from end correction.","Acoustics, musical instruments and sound-speed measurements.","Resonance converts a hard-to-see wavelength into a measurable length.","v = fλ"),
      topic("Electrical experiments and bridge methods","Measure resistance or resistivity with Ohm's law and a metre bridge; use half deflection to estimate galvanometer resistance and figure of merit.","Circuit component testing and calibration of electrical instruments.","Circuit measurements teach how to account for internal resistance and instrument loading.","ρ = RA/L"),
      topic("Optical experiments and semiconductor characteristics","Measure focal length by parallax, plot prism deviation, find refractive index and trace diode or Zener I–V characteristics.","Lens selection, refractive-index measurement and electronic component identification.","Plots reveal trends, turning points and breakdown behaviour more clearly than isolated readings.","n = sin i/sin r")
    ]
  }
];

const SOURCE_COVERAGE = {
  1: "Units of measurement; systems of units and SI units; fundamental and derived units; least count; significant figures; errors in measurement; dimensions of physical quantities; dimensional analysis and its applications",
  2: "Frame of reference; motion in a straight line; speed and velocity; uniform and non-uniform motion; average speed and instantaneous velocity; uniformly accelerated motion; velocity-time and position-time graphs; equations of uniformly accelerated motion; relative velocity; motion in a plane; projectile motion; uniform circular motion",
  3: "Force and inertia; Newton’s first law; momentum; Newton’s second law; impulse; Newton’s third law; conservation of linear momentum and applications; equilibrium of concurrent forces; static and kinetic friction; laws of friction; rolling friction; dynamics of uniform circular motion; centripetal force; vehicle on a level circular road; vehicle on a banked road",
  4: "Work by constant and variable forces; kinetic and potential energy; work-energy theorem; power; potential energy of a spring; conservation of mechanical energy; conservative and non-conservative forces; motion in a vertical circle; elastic and inelastic collisions in one and two dimensions",
  5: "Centre of mass of a two-particle system; centre of mass of a rigid body; rotational motion; moment of a force; torque; angular momentum and its conservation; applications of angular momentum conservation; moment of inertia; radius of gyration; moments of inertia of simple geometrical objects; parallel and perpendicular axes theorems; equilibrium of rigid bodies; rigid-body rotation; equations of rotational motion; comparison of linear and rotational motion",
  6: "Universal law of gravitation; acceleration due to gravity; variation of gravity with altitude and depth; Kepler’s laws of planetary motion; gravitational potential energy; gravitational potential; escape velocity; motion of a satellite; orbital velocity; satellite time period and energy",
  7: "Elastic behaviour; stress-strain relationship; Hooke’s law; Young’s modulus; bulk modulus; modulus of rigidity; pressure due to a fluid column; Pascal’s law and applications; gravity and fluid pressure; viscosity; Stoke’s law; terminal velocity; streamline and turbulent flow; critical velocity; Bernoulli’s principle and applications; surface energy and surface tension; angle of contact; excess pressure across a curved surface; drops and bubbles; capillary rise; heat and temperature; thermal expansion; specific heat capacity; calorimetry; change of state; latent heat; conduction, convection and radiation",
  8: "Thermal equilibrium; concept of temperature; zeroth law of thermodynamics; heat; work; internal energy; first law of thermodynamics; isothermal and adiabatic processes; second law of thermodynamics; reversible and irreversible processes",
  9: "Equation of state of a perfect gas; work done on compressing a gas; assumptions of kinetic theory; concept of pressure; kinetic interpretation of temperature; RMS speed of gas molecules; degrees of freedom; law of equipartition of energy; applications to specific heat capacities of gases; mean free path; Avogadro’s number",
  10: "Oscillations and periodic motion; time period and frequency; displacement as a function of time; periodic functions; simple harmonic motion and its equation; phase; spring oscillations; restoring force and force constant; kinetic and potential energy in SHM; simple pendulum and derivation of its time period; wave motion; longitudinal and transverse waves; speed of a travelling wave; displacement relation for a progressive wave; superposition; reflection; standing waves in strings and organ pipes; fundamental mode and harmonics; beats",
  11: "Electric charge and conservation of charge; Coulomb’s law; forces between multiple charges; superposition principle; continuous charge distribution; electric field of a point charge; field lines; electric dipole; field due to a dipole; torque on a dipole in a uniform field; electric flux; Gauss’s law; field of an infinite straight wire, infinite plane sheet and thin spherical shell; electric potential of a point charge, dipole and system of charges; potential difference; equipotential surfaces; electrostatic potential energy of two charges and a dipole in a field; conductors and insulators; dielectrics and polarisation; capacitors and capacitance; series and parallel combinations; parallel-plate capacitor with and without dielectric; energy stored in a capacitor",
  12: "Electric current; drift velocity and mobility; relation between drift and current; Ohm’s law; resistance; I-V characteristics of Ohmic and non-Ohmic conductors; electrical energy and power; resistivity and conductivity; series and parallel resistor combinations; temperature dependence of resistance; internal resistance; potential difference and emf of a cell; series and parallel cell combinations; Kirchhoff’s laws and applications; Wheatstone bridge; metre bridge",
  13: "Biot-Savart law and circular current loop; Ampere’s law; field of an infinite straight wire and solenoid; force on a moving charge in uniform magnetic and electric fields; force on a current-carrying conductor; force between parallel current-carrying conductors and definition of ampere; torque on a current loop; moving-coil galvanometer; sensitivity; conversion to ammeter and voltmeter; current loop as a magnetic dipole; magnetic dipole moment; bar magnet as equivalent solenoid; magnetic field lines; dipole field along and perpendicular to its axis; torque on a magnetic dipole; para-, dia- and ferromagnetic substances with examples; temperature effects on magnetic properties",
  14: "Electromagnetic induction; Faraday’s law; induced emf and current; Lenz’s law; eddy currents; self-inductance and mutual inductance; alternating current; peak and RMS current and voltage; reactance and impedance; series LCR circuit; resonance; power in AC circuits; wattless current; AC generator; transformer",
  15: "Displacement current; electromagnetic waves and their characteristics; transverse nature of electromagnetic waves; electromagnetic spectrum: radio waves, microwaves, infrared, visible, ultraviolet, X-rays and gamma rays; applications of electromagnetic waves",
  16: "Reflection of light; spherical mirrors and mirror formula; refraction at plane and spherical surfaces; thin-lens formula; lens maker formula; total internal reflection and applications; magnification; power of a lens; combination of thin lenses in contact; refraction through a prism; microscopes; reflecting and refracting astronomical telescopes and magnifying power; wavefront; Huygens’ principle; laws of reflection and refraction using Huygens’ principle; Young’s double-slit experiment; fringe width; coherent sources and sustained interference; single-slit diffraction and central maximum width; plane-polarised light; Brewster’s law; uses of plane-polarised light and Polaroid",
  17: "Dual nature of radiation; photoelectric effect; Hertz and Lenard’s observations; Einstein’s photoelectric equation; particle nature of light; matter waves; wave nature of particles; de Broglie relation",
  18: "Alpha-particle scattering experiment; Rutherford model; Bohr model; energy levels; hydrogen spectrum; composition and size of nucleus; atomic masses; mass-energy relation; mass defect; binding energy per nucleon and variation with mass number; nuclear fission and fusion",
  19: "Semiconductors; semiconductor diode; I-V characteristics in forward and reverse bias; diode as rectifier; LED characteristics; photodiode; solar cell; Zener diode; Zener diode as voltage regulator; OR, AND, NOT, NAND and NOR logic gates",
  20: "Vernier calipers for internal/external diameter and depth; screw gauge for sheet or wire thickness/diameter; simple-pendulum energy dissipation graph of amplitude squared against time; metre-scale mass by principle of moments; Young’s modulus of a metal wire; surface tension by capillary rise and detergent effect; viscosity by terminal velocity of a sphere; speed of sound by resonance tube; specific heat of solid and liquid by mixtures; resistivity by metre bridge; resistance by Ohm’s law; galvanometer resistance and figure of merit by half-deflection; focal length of convex mirror, concave mirror and convex lens by parallax; prism deviation versus incidence graph; glass-slab refractive index by travelling microscope; p-n diode forward/reverse characteristic curves; Zener characteristics and breakdown voltage; identify diode, LED, resistor and capacitor"
};

function loadExplored() {
  try {
    const stored = JSON.parse(localStorage.getItem("physics-lab-explored") || "[]");
    return Array.isArray(stored) ? stored.filter((id) => Number.isInteger(id) && id >= 1 && id <= CHAPTERS.length) : [];
  } catch {
    return [];
  }
}
function persistExplored() {
  try { localStorage.setItem("physics-lab-explored", JSON.stringify([...state.explored])); } catch { /* Progress remains available for this page session. */ }
}
const state = { chapter: 1, topic: 0, values: {}, explored: new Set(loadExplored()), raf: 0, time: 0, toastTimer: 0 };
const $ = (selector) => document.querySelector(selector);
const canvas = $("#physics-canvas");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
state.running = !reduceMotion;
const fmt = (n, digits = 1) => n === Infinity ? "∞" : n === -Infinity ? "−∞" : Number.isFinite(n) ? Number(n).toFixed(digits).replace(/\.0$/, "") : "—";
const current = () => CHAPTERS[state.chapter - 1];

function initValues(chapter) {
  state.values = Object.fromEntries(chapter.controls.map((control) => [control.key, control.value]));
}

function buildNavigation(filter = "") {
  const list = $("#chapter-list");
  const query = filter.trim().toLowerCase();
  const matches = CHAPTERS.filter((chapter) => (chapter.title + " " + chapter.short).toLowerCase().includes(query));
  list.innerHTML = matches.length ? matches.map((chapter) => {
    const active = chapter.id === state.chapter ? " active" : "";
    const done = state.explored.has(chapter.id) ? " done" : "";
    return '<button class="chapter-item' + active + done + '" type="button" data-id="' + chapter.id + '" aria-current="' + (chapter.id === state.chapter ? "page" : "false") + '"><span class="chapter-number">' + String(chapter.id).padStart(2,"0") + '</span><span class="chapter-name">' + chapter.short + '</span><span class="chapter-state" aria-hidden="true"></span></button>';
  }).join("") : '<div class="rail-empty">No chapters match that search.</div>';
  list.querySelectorAll(".chapter-item").forEach((button) => button.addEventListener("click", () => selectChapter(Number(button.dataset.id))));
}

function updateProgress() {
  const count = state.explored.size;
  $("#progress-copy").textContent = count + " / 20 explored";
  $("#progress-fill").style.width = (count / CHAPTERS.length * 100) + "%";
  buildNavigation($("#chapter-search").value);
}

function selectChapter(id) {
  state.chapter = id;
  state.topic = 0;
  state.time = 0;
  initValues(current());
  state.explored.add(id);
  persistExplored();
  renderChapter();
  updateProgress();
  if (window.innerWidth < 761) $("#lesson").scrollIntoView({behavior: reduceMotion ? "auto" : "smooth", block:"start"});
}

function renderChapter() {
  const chapter = current();
  document.documentElement.style.setProperty("--accent", chapter.accent || "#70e8ff");
  $("#breadcrumb-unit").textContent = "UNIT " + String(chapter.id).padStart(2,"0");
  $("#breadcrumb-name").textContent = chapter.title.toUpperCase();
  $("#chapter-title").textContent = chapter.title;
  $("#chapter-description").textContent = chapter.description;
  $("#sim-unit").textContent = "UNIT " + String(chapter.id).padStart(2,"0");
  $("#sim-title").textContent = chapter.simTitle;
  $("#sim-insight-copy").textContent = chapter.insight;
  $("#canvas-label").textContent = chapter.scene === "pendulum" ? "LAB IN PROGRESS" : "LIVE MODEL";
  $("#canvas-caption").textContent = "Adjust a variable to see the system respond.";
  $("#topic-count").textContent = String(chapter.topics.length).padStart(2,"0") + " CONCEPT GROUPS";
  $("#coverage-list").innerHTML = SOURCE_COVERAGE[chapter.id].split("; ").map((item) => '<span class="coverage-item">' + item + '</span>').join("");
  $("#mark-button").setAttribute("aria-pressed", state.explored.has(chapter.id) ? "true" : "false");
  $("#mark-label").textContent = state.explored.has(chapter.id) ? "Explored" : "Mark explored";
  updatePlayButton();
  renderControls();
  renderTopics();
  draw();
}

function renderControls() {
  const host = $("#sim-controls");
  host.innerHTML = current().controls.map((control) => {
    return '<label class="control"><span class="control-top"><span>' + control.label + '</span><span class="control-value" id="value-' + control.key + '"></span></span><input type="range" min="' + control.min + '" max="' + control.max + '" step="' + control.step + '" value="' + state.values[control.key] + '" data-key="' + control.key + '" aria-label="' + control.label + '"></label>';
  }).join("");
  host.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener("input", () => {
      state.values[input.dataset.key] = Number(input.value);
      updateControlValues();
      draw();
    });
  });
  updateControlValues();
}

function updateControlValues() {
  current().controls.forEach((control) => {
    const value = state.values[control.key];
    const label = $("#value-" + control.key);
    if (label) label.textContent = fmt(value, control.step < 1 ? 1 : 0) + " " + control.unit;
    const input = document.querySelector('input[data-key="' + control.key + '"]');
    if (input) input.style.setProperty("--range-fill", ((value - control.min) / (control.max - control.min) * 100) + "%");
  });
  updateReadouts();
}

function updateReadouts() {
  const c = current(), v = state.values, results = metrics(c, v);
  $("#sim-readouts").innerHTML = results.map((item) => '<div class="readout"><div class="readout-label">' + item.label + '</div><div class="readout-value">' + item.value + '<small>' + (item.unit || "") + '</small></div></div>').join("");
}

function renderTopics() {
  const host = $("#topic-list");
  host.innerHTML = current().topics.map((item, index) => {
    const open = index === state.topic ? " open" : "";
    return '<article class="topic-card' + open + '"><button class="topic-toggle" type="button" aria-expanded="' + (index === state.topic) + '" data-topic="' + index + '"><span class="topic-index">' + String(index + 1).padStart(2,"0") + '</span><span class="topic-title">' + item.title + '</span><span class="topic-chevron" aria-hidden="true">+</span></button><div class="topic-body"><p class="topic-explanation">' + item.explanation + '</p><div class="topic-facts"><div class="topic-fact"><span>Where it shows up</span><p>' + item.application + '</p></div><div class="topic-fact"><span>Why it matters</span><p>' + item.importance + '</p></div><div class="topic-fact formula"><span>Useful relationship</span><p>' + item.formula + '</p></div></div></div></article>';
  }).join("");
  host.querySelectorAll(".topic-toggle").forEach((button) => button.addEventListener("click", () => {
    const index = Number(button.dataset.topic);
    state.topic = state.topic === index ? -1 : index;
    renderTopics();
    const selected = current().topics[index];
    $("#canvas-caption").textContent = state.topic === -1 ? "Adjust a variable to see the system respond." : "Focus: " + selected.title;
    if (state.topic !== -1) $("#sim-insight-copy").textContent = current().insight + " The highlighted concept: " + selected.title + ".";
  }));
}

function metrics(c, v) {
  switch (c.scene) {
    case "measure": return [{label:"Scale reading",value:fmt(v.length,1),unit:"cm"},{label:"Resolution",value:fmt(v.least,1),unit:"mm"},{label:"Relative uncertainty",value:"±"+fmt(v.least/10/v.length*100,2),unit:"%"}];
    case "projectile": { const flight=2*v.speed*Math.sin(v.angle*Math.PI/180)/v.gravity, range=v.speed*Math.cos(v.angle*Math.PI/180)*flight; return [{label:"Time in air",value:fmt(flight,2),unit:"s"},{label:"Horizontal range",value:fmt(range,1),unit:"m"},{label:"Peak height",value:fmt(v.speed**2*Math.sin(v.angle*Math.PI/180)**2/(2*v.gravity),1),unit:"m"}]; }
    case "newton": { const friction=v.mu*v.mass*9.8, net=Math.max(v.force-friction,0); return [{label:"Friction limit",value:fmt(friction,1),unit:"N"},{label:"Net force",value:fmt(net,1),unit:"N"},{label:"Acceleration",value:fmt(net/v.mass,2),unit:"m/s²"}]; }
    case "energy": { const energy=v.mass*9.8*v.height, lost=energy*v.friction/100; return [{label:"Start potential",value:fmt(energy,0),unit:"J"},{label:"Energy dissipated",value:fmt(lost,0),unit:"J"},{label:"Speed at bottom",value:fmt(Math.sqrt(Math.max(0,2*(energy-lost)/v.mass)),1),unit:"m/s"}]; }
    case "rotation": { const I=.5*v.mass*v.radius**2, alpha=v.torque/I; return [{label:"Moment of inertia",value:fmt(I,2),unit:"kg·m²"},{label:"Angular acceleration",value:fmt(alpha,2),unit:"rad/s²"},{label:"Rim acceleration",value:fmt(alpha*v.radius,2),unit:"m/s²"}]; }
    case "gravity": { const G=6.674e-11, M=5.972e24*v.planet, R=6.371e6*v.orbit, speed=Math.sqrt(G*M/R), period=2*Math.PI*R/speed; return [{label:"Orbital speed",value:fmt(speed/1000,2),unit:"km/s"},{label:"Orbital period",value:fmt(period/3600,2),unit:"hours"},{label:"Binding energy",value:fmt(G*M*v.satellite/(2*R)/1000,1),unit:"kJ"}]; }
    case "fluids": return [{label:"Gauge pressure",value:fmt(v.density*v.gravity*v.depth/1000,1),unit:"kPa"},{label:"Water depth",value:fmt(v.depth,1),unit:"m"},{label:"Pressure force / 0.01 m²",value:fmt(v.density*v.gravity*v.depth*.01,1),unit:"N"}];
    case "thermo": { const ratio=1+v.volume/100, work=8.314*v.temperature*(1-Math.pow(ratio,1-v.gamma))/(v.gamma-1), finalT=v.temperature*Math.pow(ratio,1-v.gamma); return [{label:"Work by gas",value:fmt(work,1),unit:"J"},{label:"Final temperature",value:fmt(finalT,1),unit:"K"},{label:"Heat transfer",value:"0",unit:"J · adiabatic"}]; }
    case "gas": { const R=8.314, p=v.moles*R*v.temperature/(v.volume/1000); return [{label:"Ideal-gas pressure",value:fmt(p/1000,1),unit:"kPa"},{label:"Molecular speed",value:fmt(Math.sqrt(3*R*v.temperature/.028),0),unit:"m/s"},{label:"Mean kinetic energy",value:fmt(1.5*1.38e-23*v.temperature/1.602e-19,3),unit:"eV"}]; }
    case "wave": { const speed=20, wavelength=speed/v.frequency, fundamental=speed/(2*v.length); return [{label:"Wavelength",value:fmt(wavelength,2),unit:"m"},{label:"Wave speed",value:fmt(speed,0),unit:"m/s"},{label:"String fundamental",value:fmt(fundamental,2),unit:"Hz"}]; }
    case "electro": { const E=8.99e9*v.charge*1e-6/(v.separation/100/2)**2, F=E*v.test*1e-9; return [{label:"Midpoint field",value:fmt(E/1e5,2),unit:"×10⁵ N/C"},{label:"Test-charge force",value:fmt(F*1000,2),unit:"mN"},{label:"Potential scale",value:fmt(8.99e9*v.charge*1e-6/(v.separation/200)/1000,1),unit:"kV"}]; }
    case "circuit": { const I=v.voltage/(v.resistance+v.internal); return [{label:"Circuit current",value:fmt(I,3),unit:"A"},{label:"Load voltage",value:fmt(I*v.resistance,2),unit:"V"},{label:"Load power",value:fmt(I**2*v.resistance,2),unit:"W"}]; }
    case "magnet": { const B=2e-7*v.current/(v.distance/100), force=1.602e-19*(v.charge*1e5)*B; return [{label:"Field at wire",value:fmt(B*1e6,2),unit:"μT"},{label:"Particle force",value:fmt(force*1e12,2),unit:"pN"},{label:"Direction",value:"Right-hand",unit:"rule"}]; }
    case "induction": { const emf=2*Math.PI*v.frequency*(v.flux/1000)*v.turns; return [{label:"Peak induced emf",value:fmt(emf,1),unit:"V"},{label:"RMS emf",value:fmt(emf/Math.sqrt(2),1),unit:"V"},{label:"Cycle time",value:fmt(1/v.frequency*1000,1),unit:"ms"}]; }
    case "emwave": { const hz=v.frequency*1e12, lambda=3e8/hz; return [{label:"Wavelength",value:lambda>1?fmt(lambda,2):fmt(lambda*1e9,0),unit:lambda>1?"m":"nm"},{label:"Photon energy",value:fmt(4.136e-15*hz,2),unit:"eV"},{label:"Vacuum speed",value:"3.00",unit:"×10⁸ m/s"}]; }
    case "optics": { const u=v.object, f=v.focal, image=Math.abs(u-f)<1e-9?Infinity:f*u/(u-f), mag=Math.abs(image/u); return [{label:"Image distance",value:fmt(image,1),unit:"cm"},{label:"Magnification",value:fmt(mag,2),unit:"×"},{label:"Lens power",value:fmt(100/f,2),unit:"D"}]; }
    case "photoelectric": { const photon=4.136e-15*v.frequency*1e14, ke=Math.max(0,photon-v.work); return [{label:"Photon energy",value:fmt(photon,2),unit:"eV"},{label:"Max electron energy",value:fmt(ke,2),unit:"eV"},{label:"Emission",value:photon>v.work?"ON":"BELOW",unit:"threshold"}]; }
    case "atom": { const upper=-13.6/(v.level**2), lower=-13.6/Math.max(1,v.level-v.transition)**2, photon=upper-lower; return [{label:"Photon energy",value:fmt(photon,2),unit:"eV"},{label:"Binding energy / nucleon",value:fmt((8.8*Math.exp(-(((v.mass-56)/75)**2))+1.2),2),unit:"MeV"},{label:"Mass equivalent",value:fmt(photon/931.5,5),unit:"u"}]; }
    case "diode": return [{label:"Input peak",value:fmt(v.voltage,1),unit:"V"},{label:"Turn-on voltage",value:fmt(v.threshold,2),unit:"V"},{label:"Output type",value:"Pulsating",unit:"DC"}];
    case "pendulum": { const T=2*Math.PI*Math.sqrt(v.length/9.81); return [{label:"Period",value:fmt(T,3),unit:"s"},{label:"Time for swings",value:fmt(T*v.swings,2),unit:"s"},{label:"Small-angle check",value:v.angle<=15?"GOOD":"REPEAT",unit:"model"}]; }
    default: return [];
  }
}


function setupCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * dpr));
  const height = Math.max(1, Math.round(rect.height * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width; canvas.height = height;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return {w:rect.width,h:rect.height};
}

function roundRect(x,y,w,h,r,fill,stroke) {
  ctx.beginPath(); ctx.roundRect(x,y,w,h,r);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); }
}
function line(x1,y1,x2,y2,color,width=1,dash=[]) {
  ctx.beginPath(); ctx.setLineDash(dash); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.strokeStyle=color; ctx.lineWidth=width; ctx.stroke(); ctx.setLineDash([]);
}
function arrow(x1,y1,x2,y2,color,width=2,head=7) {
  line(x1,y1,x2,y2,color,width);
  const angle=Math.atan2(y2-y1,x2-x1);
  ctx.beginPath(); ctx.moveTo(x2,y2); ctx.lineTo(x2-head*Math.cos(angle-.5),y2-head*Math.sin(angle-.5)); ctx.lineTo(x2-head*Math.cos(angle+.5),y2-head*Math.sin(angle+.5)); ctx.closePath(); ctx.fillStyle=color; ctx.fill();
}
function circle(x,y,r,fill,stroke) { ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); if(fill){ctx.fillStyle=fill;ctx.fill();} if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();} }
function label(text,x,y,color="#8c9c91",size=10,align="left") { ctx.fillStyle=color; ctx.font=size+"px 'DM Mono', monospace"; ctx.textAlign=align; ctx.fillText(text,x,y); }
function textSans(text,x,y,color="#dce8df",size=12,align="left") { ctx.fillStyle=color; ctx.font="600 "+size+"px 'DM Sans', sans-serif"; ctx.textAlign=align; ctx.fillText(text,x,y); }
function grid(w,h,step=28) {
  ctx.fillStyle="#0b1512"; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle="rgba(200,229,209,.045)"; ctx.lineWidth=1;
  for(let x=0;x<=w;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=0;y<=h;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
}
function glow(x,y,r,color) { const g=ctx.createRadialGradient(x,y,0,x,y,r); g.addColorStop(0,color);g.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=g;ctx.fillRect(x-r,y-r,2*r,2*r); }
function draw() {
  const {w,h}=setupCanvas();
  if (!w || !h) return;
  grid(w,h);
  const c=current(), v=state.values;
  switch(c.scene) {
    case "measure": drawMeasure(w,h,v); break;
    case "projectile": drawProjectile(w,h,v); break;
    case "newton": drawNewton(w,h,v); break;
    case "energy": drawEnergy(w,h,v); break;
    case "rotation": drawRotation(w,h,v); break;
    case "gravity": drawGravity(w,h,v); break;
    case "fluids": drawFluids(w,h,v); break;
    case "thermo": drawThermo(w,h,v); break;
    case "gas": drawGas(w,h,v); break;
    case "wave": drawWave(w,h,v); break;
    case "electro": drawElectro(w,h,v); break;
    case "circuit": drawCircuit(w,h,v); break;
    case "magnet": drawMagnet(w,h,v); break;
    case "induction": drawInduction(w,h,v); break;
    case "emwave": drawEmWave(w,h,v); break;
    case "optics": drawOptics(w,h,v); break;
    case "photoelectric": drawPhotoelectric(w,h,v); break;
    case "atom": drawAtom(w,h,v); break;
    case "diode": drawDiode(w,h,v); break;
    case "pendulum": drawPendulum(w,h,v); break;
  }
  if (state.running) {
    state.time += .016;
    if (!state.raf) state.raf = requestAnimationFrame(() => { state.raf = 0; draw(); });
  }
}

function drawMeasure(w,h,v) {
  const left=42, right=w-30, y=h*.58, length=right-left, cm=length/70;
  line(left,y,right,y,"#7b9184",2);
  for(let i=0;i<=70;i++){const x=left+i*cm;const major=i%10===0,mid=i%5===0;line(x,y,x,y+(major?19:mid?12:6),major?"#bfd1c4":"#688075",1);if(major)label(String(i),x,y+34,"#82958a",8,"center");}
  const end=left+v.length*cm;
  roundRect(left,y-20,end-left,16,4,"rgba(112,232,255,.29)","rgba(112,232,255,.75)");
  line(end,y-26,end,y+29,"#dcfcff",2);
  circle(left,y-12,4,"#70e8ff");circle(end,y-12,4,"#70e8ff");
  label("OBJECT",left,y-37,"#70e8ff",8);label(fmt(v.length,0)+" cm",end,y-37,"#e6f1e8",9,"center");
  label("RULER · 1 cm DIVISIONS",left,y+57,"#64776b",8);
  const gaugeY=h*.22;
  roundRect(left,gaugeY,right-left,34,5,"#131f1a","#293a30");
  label("RESOLUTION",left+12,gaugeY+21,"#809187",8);
  const ticks=Math.max(1,Math.round(10/v.least));
  for(let i=0;i<Math.min(ticks,80);i++){const x=left+105+i*((right-left-115)/Math.min(ticks,80));line(x,gaugeY+7,x,gaugeY+27,i%5===0?"#70e8ff":"#516357",i%5===0?1.5:1);}
  label("least count  "+fmt(v.least,1)+" mm",right-12,gaugeY+21,"#c7d8cc",9,"right");
}
function drawProjectile(w,h,v) {
  const g=v.gravity, rad=v.angle*Math.PI/180, flight=2*v.speed*Math.sin(rad)/g, range=v.speed*Math.cos(rad)*flight, peak=v.speed**2*Math.sin(rad)**2/(2*g);
  const x0=42, y0=h-42, sx=(w-95)/Math.max(range*1.15,1), sy=(h-95)/Math.max(peak*1.5,1);
  line(x0,y0,w-20,y0,"#496055");line(x0,20,x0,y0,"#496055");
  for(let i=0;i<=5;i++){const x=x0+(w-70)*i/5;line(x,y0-3,x,y0+3,"#586c60");}
  ctx.beginPath();
  for(let i=0;i<=60;i++){const t=flight*i/60,x=x0+v.speed*Math.cos(rad)*t*sx,y=y0-(v.speed*Math.sin(rad)*t-.5*g*t*t)*sy;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
  ctx.strokeStyle="rgba(112,232,255,.9)";ctx.lineWidth=2;ctx.stroke();
  const t=(state.time%Math.max(flight,1)), x=x0+v.speed*Math.cos(rad)*t*sx,y=y0-(v.speed*Math.sin(rad)*t-.5*g*t*t)*sy;
  glow(x,y,25,"rgba(112,232,255,.17)");circle(x,y,6,"#d8fbff");arrow(x,y,x+27*Math.cos(rad),y-27*Math.sin(rad),"#78d8c5",1.5,5);
  circle(x0,y0,4,"#e9b978");label("u = "+fmt(v.speed,0)+" m/s",x0+8,y0-28,"#c5d5ca",8);
  label("x →",w-35,y0+19,"#75877b",8);label("y",x0-7,18,"#75877b",8);
}
function drawNewton(w,h,v) {
  const floor=h*.72, frictionLimit=v.mu*v.mass*9.8, sliding=v.force>frictionLimit, friction=sliding?frictionLimit:v.force, net=v.force-friction, acceleration=net/v.mass;
  const bw=72,bh=53,travel=Math.max(70,w*.44-bw),speed=net>0?18+Math.sqrt(acceleration)*14:0;
  const x=w*.18+(net>0?(state.time*speed)%travel:0);
  line(20,floor,w-20,floor,"#687c70",2);
  for(let i=0;i<18;i++){const xx=28+i*18;line(xx,floor+6,xx-6,floor+12,"#34463c");}
  for(let i=3;i>0;i--)if(net>0)roundRect(x-i*12,floor-bh+9,bw*.45,36,4,"rgba(112,232,255,"+(.035*i)+")");
  roundRect(x,floor-bh,bw,bh,6,"#22384a","#6e9aaf");
  textSans(fmt(v.mass,0)+" kg",x+bw/2,floor-24,"#d9e8dc",11,"center");
  arrow(x+bw/2,floor-bh-8,x+bw/2+Math.min(115,Math.max(15,v.force*1.25)),floor-bh-8,"#70e8ff",3,8);
  label("APPLIED  "+fmt(v.force,0)+" N",x+bw/2+72,floor-bh-18,"#70e8ff",8,"center");
  arrow(x+bw/2,floor-12,x+bw/2-Math.min(90,friction*1.3),floor-12,"#e6a875",2,7);
  label((sliding?"KINETIC":"STATIC")+" FRICTION  "+fmt(friction,1)+" N",x+bw/2-48,floor-22,"#e6a875",8,"center");
  label("ΣF = "+fmt(net,1)+" N",w*.76,h*.24,"#c8d7cc",10,"center");
  label(sliding?"BLOCK SLIDES →":"STATIC FRICTION HOLDS",w*.76,h*.31,sliding?"#70e8ff":"#e6a875",8,"center");
}
function drawEnergy(w,h,v) {
  const x0=36,x1=w-112,yBase=h*.83,H=Math.min(h*.5,28+v.height*4.4),yStart=yBase-H,loss=v.friction/100;
  const trackY=(u)=>yBase-H*(1-u)-Math.sin(Math.PI*u)*h*.06;
  line(x0,yBase,x1,yBase,"#53675b",2);
  ctx.beginPath();
  for(let i=0;i<=100;i++){const u=i/100,x=x0+(x1-x0)*u,y=trackY(u);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
  ctx.strokeStyle="#587464";ctx.lineWidth=5;ctx.stroke();
  const pace=.11+.13*Math.sqrt(v.height/18)*(1-loss*.65),u=(state.time*pace)%1,x=x0+(x1-x0)*u,y=trackY(u);
  circle(x,y-11,9,"#e6ad74");circle(x,y-11,15,"rgba(230,173,116,.12)");
  const heightFraction=Math.max(0,Math.min(1,(yBase-y)/Math.max(H,1))),potential=heightFraction,heat=loss*u,kinetic=Math.max(0,1-potential-heat);
  const totalEnergy=v.mass*9.8*v.height,energyScale=Math.min(1,totalEnergy/(100*9.8*30));
  const bx=w-91,top=h*.25,barH=h*.42;
  label("ENERGY",bx+27,top-12,"#87978d",8,"center");
  const bars=[{name:"K",value:kinetic*energyScale,color:"rgba(112,232,255,.82)"},{name:"U",value:potential*energyScale,color:"rgba(183,239,113,.8)"},{name:"HEAT",value:heat*energyScale,color:"rgba(230,173,116,.8)"}];
  bars.forEach((b,i)=>{const xx=bx+i*24;roundRect(xx,top,17,barH,3,"#1c2a22","#40544a");const fillH=barH*b.value;if(fillH>1)roundRect(xx+1,top+barH-fillH,15,fillH,2,b.color);label(b.name,xx+8,top+barH+13,b.name==="HEAT"?"#e6ad74":"#9aa99e",7,"center");});
  label("MAX 29.4 kJ",bx+27,top+barH+26,"#718277",6,"center");
  label("START  "+fmt(v.height,0)+" m  ·  "+fmt(totalEnergy/1000,1)+" kJ",x0,yStart-12,"#c2d0c5",8);label("friction loss  "+fmt(v.friction,0)+"%",x0,yBase+20,"#87978d",8);
}
function drawRotation(w,h,v) {
  const cx=w*.46,cy=h*.52,r=Math.min(h*.3,w*.22)*(.64+.36*(v.radius-.2)/1.6), inertia=.5*v.mass*v.radius**2,alpha=v.torque/inertia,angle=state.time*(1+alpha*.3);
  circle(cx,cy,r,"rgba(119,173,138,.04)","#698176");circle(cx,cy,6,"#70e8ff");
  for(let i=0;i<8;i++){const a=i*Math.PI/4;line(cx,cy,cx+r*Math.cos(a),cy+r*Math.sin(a),"#536b5b",2);}
  circle(cx+r*.62*Math.cos(angle),cy+r*.62*Math.sin(angle),10,"#a6d582","#e0ffb8");
  arrow(cx,cy,cx+r*Math.cos(angle),cy+r*Math.sin(angle),"#70e8ff",2,7);
  arrow(cx+r*Math.cos(angle),cy+r*Math.sin(angle),cx+r*Math.cos(angle)-25*Math.sin(angle),cy+r*Math.sin(angle)+25*Math.cos(angle),"#e9b578",2,7);
  label("τ = "+fmt(v.torque,0)+" N·m",cx,cy-r-19,"#c6d7ca",9,"center");
  label("axis",cx+10,cy+17,"#74877b",8);
  line(w*.74,h*.23,w*.74,h*.77,"#36493e");
  label("ANGULAR RESPONSE",w*.74,h*.2,"#84958a",8,"center");
  for(let i=0;i<12;i++){const a=i/12*Math.PI*2+angle;circle(w*.74+Math.cos(a)*38,h*.49+Math.sin(a)*38,2.5,"#83d8c2");}
  label("m = "+fmt(v.mass,0)+" kg  ·  r = "+fmt(v.radius,1)+" m",w*.74,h*.69,"#a6b7aa",8,"center");
  label("I = "+fmt(inertia,2)+" kg·m²  ·  α = "+fmt(alpha,2)+" rad/s²",w*.74,h*.75,"#70e8ff",8,"center");
}
function drawGravity(w,h,v) {
  const cx=w*.48,cy=h*.52,planetR=Math.min(42,23*Math.cbrt(v.planet)),orbitR=Math.min(w*.37,48+(v.orbit-1.2)/3.8*Math.min(w*.22,h*.29));
  const angular=.72*Math.sqrt(v.planet/Math.pow(v.orbit,3)),a=state.time*angular;
  glow(cx,cy,planetR*2.2,"rgba(104,174,195,.11)");circle(cx,cy,planetR,"#426c73","#91c6bf");circle(cx-planetR*.3,cy-planetR*.2,planetR*.22,"rgba(112,232,255,.25)");
  ctx.beginPath();ctx.ellipse(cx,cy,orbitR,orbitR*.72,-.16,0,Math.PI*2);ctx.strokeStyle="rgba(112,232,255,.42)";ctx.setLineDash([4,6]);ctx.stroke();ctx.setLineDash([]);
  const sx=cx+orbitR*Math.cos(a),sy=cy+orbitR*.72*Math.sin(a);circle(sx,sy,6,"#f0bd75");glow(sx,sy,18,"rgba(240,189,117,.18)");
  arrow(sx,sy,sx+(cx-sx)*.23,sy+(cy-sy)*.23,"#e99873",1.5,5);
  label("MASS  "+fmt(v.planet,1)+" M⊕",cx,cy+planetR+18,"#b7c8bd",8,"center");
  label("ORBIT RADIUS  "+fmt(v.orbit,1)+" Rₑ",w*.5,23,"#a7b8ac",9,"center");
  label("SATELLITE  "+fmt(v.satellite,0)+" kg",w*.5,h*.94,"#93a399",8,"center");
}
function drawFluids(w,h,v) {
  const x=w*.27,top=h*.16,bottom=h*.83,bw=w*.34,span=bottom-top,waterDepth=span*Math.min(1,v.depth/8),waterTop=bottom-waterDepth;
  roundRect(x,top,bw,span,8,"rgba(0,0,0,0)","#71867a");
  ctx.save();ctx.beginPath();ctx.roundRect(x+1,top+1,bw-2,span-2,7);ctx.clip();
  const grad=ctx.createLinearGradient(0,waterTop,0,bottom),densityAlpha=Math.min(.63,.2+v.density/4000);grad.addColorStop(0,"rgba(105,195,179,"+densityAlpha+")");grad.addColorStop(1,"rgba(73,127,160,.68)");ctx.fillStyle=grad;ctx.fillRect(x,waterTop,bw,bottom-waterTop);
  line(x,waterTop,x+bw,waterTop,"rgba(141,226,211,.75)",1.5);
  for(let i=0;i<8;i++){const bx=x+18+i*19,by=waterTop+12+(i%3)*17;if(by<bottom-5)circle(bx,by,2,"rgba(172,235,220,.65)");}
  ctx.restore();
  const pressure=v.density*v.gravity*v.depth,arrowLen=Math.min(90,18+pressure/1600),py=bottom-8;
  arrow(x+bw+20,py-arrowLen/2,x+bw+20,py+arrowLen/2,"#70e8ff",2,7);
  label("h = "+fmt(v.depth,1)+" m",x+bw+34,py-2,"#c2d4c8",9);
  label("p = ρgh  "+fmt(pressure/1000,1)+" kPa",x+bw+9,py+20,"#70e8ff",8);
  line(32,bottom,w-25,bottom,"#51645a",2);
  label("INCREASING PRESSURE",w*.76,h*.22,"#8c9c91",8,"center");
  for(let i=0;i<5;i++){const yy=h*.31+i*25,len=18+pressure/2100+i*4;arrow(w*.66,yy,w*.66+Math.min(95,len),yy,"rgba(112,208,190,.78)",1.5,5);}
  label("fluid density  "+fmt(v.density,0)+" kg/m³",w*.76,h*.83,"#82948a",8,"center");
}
function drawThermo(w,h,v) {
  const x0=48,x1=w-112,yTop=35,yBase=h-43,ratio=1+v.volume/100,pRatio=Math.pow(ratio,-v.gamma),yAt=(p)=>yBase-p*(yBase-yTop),xEnd=x0+(x1-x0)*Math.min(1,v.volume/75);
  line(x0,yBase,x1+20,yBase,"#687c70");line(x0,yBase,x0,yTop,"#687c70");
  label("VOLUME",x1+12,yBase+18,"#718277",8,"right");label("PRESSURE",x0-5,yTop-8,"#718277",8);
  ctx.beginPath();
  for(let i=0;i<=60;i++){const t=i/60,r=1+(ratio-1)*t,p=Math.pow(r,-v.gamma),x=x0+(xEnd-x0)*t,y=yAt(p);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
  ctx.strokeStyle="#70e8ff";ctx.lineWidth=2.5;ctx.stroke();
  const work=8.314*v.temperature*(1-Math.pow(ratio,1-v.gamma))/(v.gamma-1),finalT=v.temperature*Math.pow(ratio,1-v.gamma);
  circle(x0,yAt(1),4,"#e6ad74");circle(xEnd,yAt(pRatio),4,"#70e8ff");
  arrow(xEnd-30,yAt(pRatio)-2,xEnd,yAt(pRatio),"#f0b578",1.5,6);
  roundRect(w*.71,h*.19,w*.22,h*.25,5,"#132019","#38493e");
  label("Q = 0  ·  ADIABATIC",w*.82,h*.27,"#70e8ff",8,"center");
  label("T₂ = "+fmt(finalT,0)+" K",w*.82,h*.34,"#c6d4ca",9,"center");
  for(let i=0;i<6;i++){const px=w*.72+i*14,py=h*.64+Math.sin(state.time*(.8+finalT/180)+i)*8;circle(px,py,3,"#79cdb8");}
  label("W = area under curve",w*.82,h*.82,"#9aa89e",8,"center");
  label("1 mol ideal gas  ·  W = "+fmt(work,0)+" J",x0,yBase+32,"#84958a",8);
}
function drawGas(w,h,v) {
  const x=w*.1,y=h*.18,bw=w*(.4+.22*(v.volume-5)/35),bh=h*.62,n=Math.max(4,Math.round(4+v.moles*7)),speedScale=Math.sqrt(v.temperature/320);
  roundRect(x,y,bw,bh,8,"rgba(21,40,32,.27)","#647b6d");
  for(let i=0;i<n;i++){const px=x+22+((i*73+Math.sin(state.time*speedScale*2+i)*14)%(bw-44));const py=y+22+((i*47+Math.cos(state.time*speedScale*1.7+i)*14)%(bh-44));const dx=Math.cos(i*2.4+state.time*speedScale)*10*speedScale,dy=Math.sin(i*1.7+state.time*speedScale)*10*speedScale;circle(px,py,3.2,"#70e8ff");line(px,py,px+dx,py+dy,"rgba(112,232,255,.42)",1);}
  label(fmt(v.volume,0)+" L  ·  "+fmt(v.moles,1)+" mol",x+bw/2,y-12,"#b9c8bd",9,"center");
  roundRect(w*.74,h*.25,w*.17,h*.43,6,"#132019","#34483b");label("WALL IMPACTS",w*.825,h*.21,"#84958a",8,"center");
  const p=v.moles*8.314*v.temperature/(v.volume/1000),impactLen=Math.min(38,10+p/9000);
  for(let i=0;i<6;i++){const yy=h*.32+i*17;arrow(w*.77,yy,w*.77+impactLen,yy,"#dfab72",1,4);}
  label(fmt(p/1000,0)+" kPa",w*.825,h*.75,"#70e8ff",9,"center");
}
function drawWave(w,h,v) {
  const speed=20,fundamental=speed/(2*v.length),mode=Math.max(1,Math.min(8,Math.round(v.frequency/fundamental))),amp=v.amplitude*.65;
  const left=32,right=w-28,mid=h*.48,travelCycles=Math.max(.45,Math.min(6,v.frequency*v.length/speed*2.4));
  line(left,mid,right,mid,"#43564b");
  ctx.beginPath();
  for(let i=0;i<=180;i++){const u=i/180,x=left+(right-left)*u,y=mid-34-Math.sin(u*travelCycles*Math.PI*2-state.time*v.frequency*1.4)*amp;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
  ctx.strokeStyle="#70e8ff";ctx.lineWidth=2;ctx.stroke();
  const base=mid+45;
  line(left,base,right,base,"#43564b");
  ctx.beginPath();
  for(let i=0;i<=180;i++){const u=i/180,x=left+(right-left)*u,y=base-Math.sin(u*mode*Math.PI)*Math.cos(state.time*v.frequency*1.4)*amp*.7;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
  ctx.strokeStyle="#77cfc0";ctx.lineWidth=1.7;ctx.stroke();
  for(let i=0;i<=mode;i++){const x=left+(right-left)*i/mode;circle(x,base,2,"#a8bbb0");}
  label("TRAVELLING WAVE",left,mid-34-amp-10,"#70e8ff",8);label("STANDING MODE  n = "+mode,left,base+amp*.7+15,"#83cbbb",8);
  label("L = "+fmt(v.length,1)+" m  ·  f₁ = "+fmt(fundamental,1)+" Hz",right,base+amp*.7+15,"#829389",8,"right");
}
function drawElectro(w,h,v) {
  const cx=w*.5,cy=h*.52,sep=Math.min(w*.22,v.separation*5),qscale=Math.min(1.4,.75+v.charge/10);
  circle(cx-sep,cy,9*qscale,"#8dd8cc");circle(cx+sep,cy,9*qscale,"#e6a16e");
  label("+q",cx-sep,cy-18,"#9ce5d7",9,"center");label("−q",cx+sep,cy-18,"#f1b58b",9,"center");
  for(let i=0;i<9;i++){const y=cy+(i-4)*17;const dy=(y-cy)/3;arrow(cx-sep+12,y,cx+sep-13,y+dy,"rgba(188,227,194,.6)",1,4);}
  for(let i=0;i<7;i++){const a=i/7*Math.PI*2;arrow(cx-sep+Math.cos(a)*24,cy+Math.sin(a)*24,cx-sep+Math.cos(a)*52,cy+Math.sin(a)*52,"#74c7bc",1,4);arrow(cx+sep+Math.cos(a)*52,cy+Math.sin(a)*52,cx+sep+Math.cos(a)*24,cy+Math.sin(a)*24,"#d9946d",1,4);}
  label("FIELD LINES",cx,cy+74,"#84968b",8,"center");
  label("TEST CHARGE",w*.82,h*.26,"#82948a",8,"center");
  const field=8.99e9*v.charge*1e-6/(v.separation/200)**2,force=field*v.test*1e-9,forceLen=Math.min(76,10+12*Math.log10(1+force*1000));
  circle(w*.82,h*.43,Math.min(11,4+Math.log1p(v.test)/5),"#e7c773");arrow(w*.82,h*.48,w*.82+forceLen,h*.48,"#e7c773",1.5,5);
  label("F = "+fmt(force*1000,2)+" mN",w*.82,h*.57,"#d6bf82",8,"center");
}
function drawCircuit(w,h,v) {
  const x0=w*.2,x1=w*.82,y0=h*.28,y1=h*.75,current=v.voltage/(v.resistance+v.internal),electronCount=Math.max(4,Math.min(14,Math.round(4+current*2)));
  line(x0,y0,x1,y0,"#71867a",2);line(x0,y1,x1,y1,"#71867a",2);line(x0,y0,x0,y1,"#71867a",2);line(x1,y0,x1,y1,"#71867a",2);
  line(x0-7,h*.46,x0+7,h*.46,"#70e8ff",3);line(x0-12,h*.51,x0+12,h*.51,"#70e8ff",1.5);label(fmt(v.voltage,1)+" V",x0,h*.58,"#84968b",8,"center");
  const rx=(x0+x1)/2,ry=y0;line(rx-60,ry,rx-37,ry,"#71867a",2);line(rx+37,ry,rx+60,ry,"#71867a",2);
  ctx.beginPath();ctx.moveTo(rx-37,ry);ctx.lineTo(rx-28,ry-8);ctx.lineTo(rx-18,ry+8);ctx.lineTo(rx-8,ry-8);ctx.lineTo(rx+2,ry+8);ctx.lineTo(rx+12,ry-8);ctx.lineTo(rx+22,ry+8);ctx.lineTo(rx+32,ry);ctx.strokeStyle="#e7ad72";ctx.lineWidth=2;ctx.stroke();label(fmt(v.resistance,0)+" Ω",rx,ry-17,"#e7ad72",8,"center");
  const phaseSpeed=.045+Math.min(.3,current*.12);
  for(let i=0;i<electronCount;i++){const f=(i/electronCount+state.time*phaseSpeed)%1;let px,py;if(f<.25){px=x0+(x1-x0)*f*4;py=y0;}else if(f<.5){px=x1;py=y0+(y1-y0)*(f-.25)*4;}else if(f<.75){px=x1-(x1-x0)*(f-.5)*4;py=y1;}else{px=x0;py=y1-(y1-y0)*(f-.75)*4;}circle(px,py,2.5,"#70e8ff");}
  arrow(x0+25,y1+22,x1-20,y1+22,"#92a298",1,5);label("CURRENT  "+fmt(current,2)+" A",w*.5,y1+39,"#829389",8,"center");
}
function drawMagnet(w,h,v) {
  const x=w*.39,y=h*.51,baseR=Math.min(w*.21,h*.34),distancePx=22+(v.distance/14)*70;
  line(x,y-baseR-15,x,y+baseR+15,"#e7ad72",3);label("I = "+fmt(v.current,1)+" A",x+9,y-baseR-20,"#70e8ff",8);
  const loops=Math.max(4,Math.min(11,4+Math.round(v.current/1.5)));
  for(let i=0;i<loops;i++){const rr=baseR*(.25+i*.14);ctx.beginPath();ctx.ellipse(x,y,rr,rr*.72,0,0,Math.PI*2);ctx.strokeStyle="rgba(139,212,190,"+(.35+i/loops*.4)+")";ctx.lineWidth=1;ctx.stroke();}
  const px=x+distancePx,py=y;circle(px,py,5,"#e7c773");label("r = "+fmt(v.distance,1)+" cm",px,py-14,"#d4dfd7",8,"center");
  const B=2e-7*v.current/(v.distance/100),force=1.602e-19*(v.charge*1e5)*B,forceLen=Math.min(62,10+force*1e14);
  arrow(px,py+10,px+forceLen,py+10,"#70e8ff",2,6);label("F = qvB",px+forceLen/2,py+28,"#70e8ff",8,"center");
  label("FIELD AROUND A CURRENT-CARRYING WIRE",w*.5,h*.92,"#89998f",8,"center");
}
function drawInduction(w,h,v) {
  const coilX=w*.68,cy=h*.44,loops=Math.max(3,Math.min(14,Math.round(v.turns/20))),freqScale=v.frequency/50,magnetSwing=Math.min(35,v.flux*1.2),mx=w*.27+Math.sin(state.time*2*freqScale)*magnetSwing;
  for(let i=0;i<loops;i++){ctx.beginPath();ctx.ellipse(coilX,cy,14+i*1.25,68-i*3.5,0,0,Math.PI*2);ctx.strokeStyle=i%2?"#82d4c2":"#70e8ff";ctx.lineWidth=1.4;ctx.stroke();}
  roundRect(mx-24,cy-17,48,34,5,"#203127","#8ca78f");line(mx,cy-17,mx,cy+17,"#e8ac77",3);label("N",mx,cy-26,"#ecb47e",8,"center");
  for(let i=0;i<Math.min(9,Math.max(2,Math.round(v.flux/3)));i++){const yy=cy-44+i*12;arrow(mx+34,yy,coilX-32,yy,"rgba(139,215,196,.55)",1,4);}
  label(fmt(v.turns,0)+" turns  ·  Φₘₐₓ = "+fmt(v.flux,0)+" mWb",coilX,cy+85,"#a5b6aa",8,"center");
  const sx=35,sy=h*.87,sw=w*.9,emf=2*Math.PI*v.frequency*(v.flux/1000)*v.turns,waveAmp=Math.min(h*.16,8+emf/60),cycles=Math.max(.4,Math.min(4,v.frequency/25));
  line(sx,sy,sw,sy,"#394d42");ctx.beginPath();for(let i=0;i<=150;i++){const xx=sx+(sw-sx)*i/150,yy=sy-waveAmp*Math.sin(i/150*Math.PI*2*cycles-state.time*freqScale*2);if(i===0)ctx.moveTo(xx,yy);else ctx.lineTo(xx,yy);}ctx.strokeStyle="#70e8ff";ctx.lineWidth=1.7;ctx.stroke();
  label("INDUCED EMF  ·  PEAK "+fmt(emf,0)+" V",sx,sy-waveAmp-8,"#8f9f94",7);
}
function drawEmWave(w,h,v) {
  const mid=h*.45,amp=18+v.amplitude*.35,phase=state.time*1.4,logPosition=Math.log(v.frequency/.01)/Math.log(900/.01),cycles=1+Math.max(0,Math.min(1,logPosition))*6;
  line(25,mid,w-25,mid,"#3f5348");
  for(let row=0;row<2;row++){ctx.beginPath();for(let i=0;i<=160;i++){const x=25+(w-50)*i/160,y=mid+(row===0?0:45)-Math.sin(i/160*cycles*2*Math.PI-phase+(row?1.2:0))*amp*(row?-.7:1);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle=row?"#88d2c0":"#70e8ff";ctx.lineWidth=2;ctx.stroke();}
  arrow(w*.2,mid+68,w*.8,mid+68,"#83958a",1.5,6);label("PROPAGATION",w*.5,mid+85,"#83958a",8,"center");
  label("E FIELD",w*.12,mid-amp-12,"#70e8ff",8);label("B FIELD",w*.12,mid+45-amp*.7-12,"#88d2c0",8);
  const bands=["RADIO","MICRO","IR","VISIBLE","UV","X-RAY","GAMMA"],bw=(w-60)/bands.length;
  const active=v.frequency<1?0:v.frequency<300?1:v.frequency<400?2:v.frequency<790?3:v.frequency<900?4:5;
  bands.forEach((name,i)=>{const x=30+i*bw;roundRect(x,h*.84,bw-3,13,3,i===active?"rgba(112,232,255,.68)":"rgba(135,157,143,.22)");label(name,x+(bw-3)/2,h*.92,"#7f9085",6,"center");});
  label(fmt(v.frequency,1)+" THz",w-30,20,"#a5b6aa",8,"right");
}
function drawOptics(w,h,v) {
  const axis=h*.58,lens=w*.53,scale=Math.min(2.2,(lens-35)/Math.max(v.object,v.focal*1.8)),objectX=lens-v.object*scale,fpx=v.focal*scale,oh=45,denom=v.object-v.focal,imageD=Math.abs(denom)<1e-9?Infinity:v.focal*v.object/denom;
  line(25,axis,w-25,axis,"#64786b",1);
  ctx.beginPath();ctx.moveTo(lens,axis-75);ctx.quadraticCurveTo(lens+18,axis,lens,axis+75);ctx.moveTo(lens,axis-75);ctx.quadraticCurveTo(lens-18,axis,lens,axis+75);ctx.strokeStyle="#88d6c7";ctx.lineWidth=2;ctx.stroke();label("LENS",lens,axis-88,"#88d6c7",8,"center");
  const objectTipY=axis-oh;arrow(objectX,axis,objectX,objectTipY,"#e7ad72",2,6);label("OBJECT",objectX,objectTipY-10,"#e7ad72",8,"center");
  circle(lens-fpx,axis,3,"#70e8ff");circle(lens+fpx,axis,3,"#70e8ff");label("F",lens-fpx,axis+17,"#91ab96",8,"center");label("F",lens+fpx,axis+17,"#91ab96",8,"center");
  const rayColor=v.wavelength<500?"rgba(136,166,255,.78)":v.wavelength>600?"rgba(255,157,137,.78)":"rgba(112,232,255,.78)";
  line(objectX,objectTipY,lens,objectTipY,rayColor,1.5);
  if(!Number.isFinite(imageD)){
    line(lens,objectTipY,w-20,objectTipY,rayColor,1.5);line(objectX,objectTipY,lens,axis,rayColor,1.5);line(lens,axis,w-20,axis,rayColor,1.5);label("IMAGE AT INFINITY",w-26,axis-16,"#e7ad72",8,"right");
  } else {
    const imageX=Math.max(28,Math.min(w-28,lens+imageD*scale)),magnification=Math.min(2.1,Math.abs(imageD/v.object)),imageY=axis+(imageD>0?1:-1)*oh*magnification;
    line(lens,objectTipY,imageX,imageY,rayColor,1.5);line(objectX,objectTipY,lens,axis,rayColor,1.5);line(lens,axis,imageX,imageY,rayColor,1.5);
    if(imageD<0){line(lens,objectTipY,imageX,imageY,"rgba(231,173,114,.48)",1,[3,4]);}
    arrow(imageX,axis,imageX,imageY,"#edb275",2,6);label(imageD>0?"REAL IMAGE":"VIRTUAL IMAGE",imageX,imageY+(imageD>0?16:-9),"#edb275",7,"center");
  }
  label("λ = "+fmt(v.wavelength,0)+" nm",w-24,22,rayColor,8,"right");
}
function drawPhotoelectric(w,h,v) {
  const plateX=w*.69,plateY=h*.25,plateH=h*.48,plateW=16,photonEnergy=4.136e-15*v.frequency*1e14,ke=Math.max(0,photonEnergy-v.work),emits=photonEnergy>v.work;
  roundRect(w*.16,plateY,19,plateH,3,"#667d70","#9eb4a3");roundRect(plateX,plateY,plateW,plateH,3,"#3c5960","#80a5a1");
  label("METAL  ·  φ="+fmt(v.work,1)+" eV",w*.16+9,plateY+plateH+17,"#91a398",7,"center");label("COLLECTOR",plateX+8,plateY+plateH+17,"#91a398",7,"center");
  const photonCount=Math.max(2,Math.round(2+v.intensity/10));
  for(let i=0;i<photonCount;i++){const yy=plateY+18+i*(plateH-36)/Math.max(photonCount-1,1),xx=w*.21+(i%2)*5;arrow(xx,yy,w*.54,yy,"rgba(112,232,255,.72)",1.2,5);circle(xx,yy,2,"#d6fbff");}
  if(emits){const electronCount=Math.max(1,Math.round(v.intensity/18)),electronLen=18+Math.min(55,ke*10);for(let i=0;i<electronCount;i++){const xx=w*.34+(i%2)*9,yy=plateY+24+i*(plateH-48)/Math.max(electronCount-1,1)+Math.sin(state.time*2+i)*4;arrow(xx,yy,xx+electronLen,yy,"#e6ac76",1.5,5);circle(xx,yy,3,"#f1c486");}}
  roundRect(w*.34,h*.78,w*.34,24,5,emits?"rgba(112,232,255,.12)":"rgba(231,141,104,.12)",emits?"rgba(112,232,255,.3)":"rgba(231,141,104,.28)");
  label(emits?"ELECTRONS  ·  Kₘₐₓ="+fmt(ke,2)+" eV":"BELOW THRESHOLD  ·  hf="+fmt(photonEnergy,2)+" eV",w*.51,h*.78+16,emits?"#c9f1ff":"#e7a287",7,"center");
}
function drawAtom(w,h,v) {
  const cx=w*.4,cy=h*.47,r=Math.min(h*.34,w*.25),upperN=Math.min(v.level,7),lowerN=Math.max(1,upperN-v.transition);
  glow(cx,cy,27,"rgba(188,147,235,.14)");circle(cx,cy,8,"#c18ee6");label("NUCLEUS",cx+14,cy+4,"#ac9eb8",7);
  for(let n=1;n<=upperN;n++){const rr=r*n/7;ctx.beginPath();ctx.arc(cx,cy,rr,Math.PI,Math.PI*2);ctx.strokeStyle=n===upperN?"rgba(112,232,255,.7)":"rgba(172,148,204,.38)";ctx.lineWidth=1;ctx.stroke();circle(cx+rr,cy,3,"#cab2e3");}
  const fromR=r*upperN/7,toR=r*lowerN/7;arrow(cx+fromR,cy-4,cx+toR,cy-4,"#70e8ff",2,7);label("photon  "+fmt(13.6*(1/lowerN**2-1/upperN**2),2)+" eV",cx+(fromR+toR)/2,cy+22,"#e6ad75",8,"center");
  const gx=w*.69,gy=h*.25,gw=w*.2,gh=h*.45;roundRect(gx,gy,gw,gh,7,"rgba(39,32,47,.25)","#584967");label("BINDING ENERGY",gx+gw/2,gy-8,"#a695b8",8,"center");
  const binding=(A)=>8.8*Math.exp(-(((A-56)/75)**2))+1.2,base=gy+gh-13;
  ctx.beginPath();for(let i=0;i<=80;i++){const A=2+i/80*238,x=gx+8+i/80*(gw-16),y=base-binding(A)/10*(gh-30);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle="#bb95dc";ctx.lineWidth=2;ctx.stroke();
  const mx=gx+8+(v.mass-2)/238*(gw-16),my=base-binding(v.mass)/10*(gh-30);circle(mx,my,4,"#70e8ff");label("A = "+fmt(v.mass,0),mx,my-10,"#c9f1ff",7,"center");label("NUCLEON NUMBER →",gx+gw/2,gy+gh+15,"#88958c",7,"center");
}
function drawDiode(w,h,v) {
  const sx=34,ex=w-25,zero=h*.56,amp=Math.min(h*.34,24+v.voltage*2.3),freq=.6+v.frequency*.3;
  line(sx,zero,ex,zero,"#4d6054");line(sx,h*.14,sx,h*.88,"#4d6054");
  ctx.beginPath();for(let i=0;i<=200;i++){const x=sx+(ex-sx)*i/200,y=zero-Math.sin(i/200*Math.PI*2*freq+state.time)*amp;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle="rgba(231,173,114,.6)";ctx.lineWidth=1.2;ctx.stroke();
  ctx.beginPath();for(let i=0;i<=200;i++){const x=sx+(ex-sx)*i/200, vin=Math.sin(i/200*Math.PI*2*freq+state.time), y=zero-Math.max(0,vin-v.threshold/v.voltage)*amp;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle="#70e8ff";ctx.lineWidth=2.2;ctx.stroke();
  label("INPUT AC",sx+10,zero-amp-10,"#d9a778",8);label("RECTIFIED OUTPUT",ex-2,zero-amp-10,"#70e8ff",8,"right");
  roundRect(w*.83,h*.28,34,72,6,"#17241d","#42594a");label("DIODE",w*.83+17,h*.28+93,"#8d9d92",7,"center");
  arrow(w*.84,h*.4,w*.84,h*.57,"#70e8ff",1.5,5);
}
function drawPendulum(w,h,v) {
  const pivotX=w*.5,pivotY=h*.2,L=Math.min(h*.57,v.length*85),period=2*Math.PI*Math.sqrt(v.length/9.81),theta=v.angle*Math.PI/180*Math.sin(state.time*2*Math.PI/period);
  line(pivotX,pivotY,pivotX+L*Math.sin(theta),pivotY+L*Math.cos(theta),"#b7c7bc",1.5);
  circle(pivotX,pivotY,4,"#d6e5d9");circle(pivotX+L*Math.sin(theta),pivotY+L*Math.cos(theta),12,"#70e8ff","#e2ffc0");
  glow(pivotX+L*Math.sin(theta),pivotY+L*Math.cos(theta),22,"rgba(112,232,255,.13)");
  line(pivotX-L*.65,pivotY+L*.78,pivotX+L*.65,pivotY+L*.78,"rgba(148,166,151,.35)",1,[3,4]);
  label("L = "+fmt(v.length,2)+" m",pivotX+15,pivotY+L*.52,"#c3d3c7",9);
  label("θ₀ = "+fmt(v.angle,0)+"°",pivotX-L*.76,pivotY+29,"#98a99d",8);
  const gx=35,gy=h*.83,gw=w-70,gh=42;
  line(gx,gy+gh, gx+gw,gy+gh,"#46594d");line(gx,gy,gx,gy+gh,"#46594d");
  ctx.beginPath();for(let i=0;i<=120;i++){const x=gx+gw*i/120,y=gy+gh/2-Math.sin(i/120*Math.PI*2*v.swings)*gh*.38;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.strokeStyle="#85d5c0";ctx.lineWidth=1.5;ctx.stroke();
  label("TIME "+fmt(v.swings,0)+" SWINGS  ·  T ≈ "+fmt(period,2)+" s",gx,gy-9,"#8d9d92",8);
}

function updatePlayButton() {
  const button=$("#play-button");
  button.setAttribute("aria-pressed",state.running?"true":"false");
  button.title=state.running?"Pause simulation":"Play simulation";
  button.innerHTML=state.running?'<span aria-hidden="true">Ⅱ</span><span>Pause</span>':'<span aria-hidden="true">▶</span><span>Play</span>';
}
function togglePlayback() {
  state.running=!state.running;
  if(state.running){draw();}else if(state.raf){cancelAnimationFrame(state.raf);state.raf=0;}
  updatePlayButton();
}
function toggleExplored() {
  const id=current().id;
  if(state.explored.has(id)){state.explored.delete(id);showToast("Removed from explored chapters");}
  else {state.explored.add(id);showToast("Chapter marked explored");}
  persistExplored();
  $("#mark-button").setAttribute("aria-pressed",state.explored.has(id)?"true":"false");
  $("#mark-label").textContent=state.explored.has(id)?"Explored":"Mark explored";
  updateProgress();
}
function showToast(message) {
  const toast=$("#toast");toast.textContent=message;toast.classList.add("visible");clearTimeout(state.toastTimer);state.toastTimer=setTimeout(()=>toast.classList.remove("visible"),1600);
}

let deferredInstallPrompt = null;
$("#share-button").addEventListener("click", async () => {
  const url = new URL(window.location.href);
  url.hash = "";
  if (url.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(url.hostname)) {
    showToast("To share with others, publish the app to a public HTTPS link first.");
    return;
  }
  try {
    if (navigator.share) {
      await navigator.share({ title: "Physics Field Lab", text: "Explore interactive JEE Physics simulations.", url: url.href });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url.href);
      showToast("App link copied to clipboard");
    } else {
      window.prompt("Copy the Physics Field Lab link", url.href);
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Could not share the app link");
  }
});
$("#install-button").addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    showToast(window.location.protocol === "file:" ? "Use the included launcher to open the installable app." : "Choose Install app or Add to Home Screen in your browser menu.");
    return;
  }
  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  if (choice.outcome === "accepted") showToast("Physics Field Lab installed");
});
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});
window.addEventListener("appinstalled", () => showToast("Physics Field Lab installed"));
if ("serviceWorker" in navigator && (window.location.protocol === "https:" || ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname))) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => showToast("Offline mode could not be enabled"));
}
$("#chapter-search").addEventListener("input", (event) => buildNavigation(event.target.value));
$("#mark-button").addEventListener("click", toggleExplored);
$("#reset-all-button").addEventListener("click", () => {
  if (!window.confirm("Clear all explored chapters and reset every simulation to its starting values?")) return;
  state.explored.clear();
  persistExplored();
  state.topic = 0;
  state.time = 0;
  initValues(current());
  renderChapter();
  updateProgress();
  $("#canvas-caption").textContent = "All exploration progress and simulation values have been reset.";
  showToast("All progress and model values reset");
});
$("#play-button").addEventListener("click", togglePlayback);
$("#reset-button").addEventListener("click", () => {
  initValues(current());state.time=0;renderControls();draw();
  $("#canvas-caption").textContent="Simulation reset to its starting values.";
  showToast("Simulation reset");
});
document.addEventListener("keydown", (event) => {
  if(event.key==="/" && document.activeElement!==$("#chapter-search") && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){event.preventDefault();$("#chapter-search").focus();}
  if(event.key==="ArrowDown" && document.activeElement===document.body){event.preventDefault();selectChapter(Math.min(CHAPTERS.length,state.chapter+1));}
  if(event.key==="ArrowUp" && document.activeElement===document.body){event.preventDefault();selectChapter(Math.max(1,state.chapter-1));}
});
window.addEventListener("resize", draw);
initValues(current());
renderChapter();
updateProgress();
