type CounterActionsType =
  | "INCREMENT"
  | "DECREMENT"
  | "COUNTRESET"
  | "INCREMENT_ASYNC";

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
