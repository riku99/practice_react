type CounterActionsType = "INCREMENT" | "DECREMENT" | "COUNTRESET";

export type CounterAction = {
  type: CounterActionsType;
};

export let increse = (): CounterAction => ({
  type: "INCREMENT",
});

export let decrese = (): CounterAction => ({
  type: "DECREMENT",
});

export let countreset = (): CounterAction => ({
  type: "COUNTRESET",
});
